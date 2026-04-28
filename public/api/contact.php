<?php
header("Content-Type: application/json");
// Lock CORS to the production origin. During local dev, test via the deployed endpoint directly.
header("Access-Control-Allow-Origin: https://nowa.wielun.pl");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "code" => "method_not_allowed"]);
    exit;
}

// --- Rate limiting (file-based, per IP, with exclusive lock to prevent race conditions) ---
$ip = $_SERVER["REMOTE_ADDR"] ?? "unknown";
$rateFile = sys_get_temp_dir() . "/cf_rate_" . md5($ip) . ".json";
$limit = 5;
$window = 600; // 10 minutes
$now = time();

$fh = fopen($rateFile, "c+");
if ($fh && flock($fh, LOCK_EX)) {
    $stored = json_decode(stream_get_contents($fh), true);
    $timestamps = is_array($stored) ? array_values(array_filter($stored, fn($t) => ($now - $t) < $window)) : [];

    if (count($timestamps) >= $limit) {
        flock($fh, LOCK_UN);
        fclose($fh);
        http_response_code(429);
        echo json_encode(["success" => false, "code" => "rate_limited"]);
        exit;
    }

    $timestamps[] = $now;
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($timestamps));
    flock($fh, LOCK_UN);
}
if ($fh) fclose($fh);

// --- Parse input ---
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !is_array($data)) {
    echo json_encode(["success" => false, "code" => "invalid_request"]);
    exit;
}

// --- Honeypot ---
if (!empty($data["company"])) {
    echo json_encode(["success" => true]);
    exit;
}

// --- Validate ---
$nameRaw    = trim($data["name"] ?? "");
$emailRaw   = trim($data["email"] ?? "");
$messageRaw = trim($data["message"] ?? "");
$gdpr       = isset($data["gdpr"]) && $data["gdpr"] === true;

if (!$nameRaw) {
    echo json_encode(["success" => false, "code" => "name_required"]);
    exit;
}

$emailClean = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
if (!$emailClean) {
    echo json_encode(["success" => false, "code" => "email_invalid"]);
    exit;
}

if (strlen($messageRaw) < 5) {
    echo json_encode(["success" => false, "code" => "message_too_short"]);
    exit;
}

if (!$gdpr) {
    echo json_encode(["success" => false, "code" => "gdpr_required"]);
    exit;
}

// --- Sanitize for email (plain text — no HTML encoding needed) ---
$name    = strip_tags($nameRaw);
$message = strip_tags($messageRaw);
// Strip newlines from email to prevent header injection
$email   = str_replace(["\r", "\n"], "", $emailClean);

// --- Send email ---
$to      = "biuro@nowa.wielun.pl";
$subject = "=?UTF-8?B?" . base64_encode("Contact Form: $name") . "?=";
$body    = "Name: $name\r\nEmail: $email\r\n\r\n$message";
$headers = implode("\r\n", [
    "From: noreply@nowa.wielun.pl",
    "Reply-To: $email",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "X-Mailer: PHP/" . PHP_VERSION,
]);

$sent = mail($to, $subject, base64_encode($body), $headers);

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "code" => "send_failed"]);
}
?>
