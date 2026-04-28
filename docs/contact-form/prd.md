# 📄 PRD: Contact Form (React Static + PHP Endpoint on cPanel)

## 1. 🎯 Goal

Enable users to send messages through a contact form on a static website (React export), with delivery to the site owner's email.

The system should:

- Work on standard shared hosting with cPanel
- Not require a Node.js backend
- Use `fetch` on the frontend
- Include basic anti-spam protection

---

## 2. 🧱 Architecture

### Frontend

- React (static export)
- Form with validation
- Submission via `fetch`

### Backend

- PHP endpoint (`/api/contact.php`)
- Handles POST (JSON)
- Sends email (SMTP preferred or `mail()` fallback)

### Hosting

- cPanel (Apache + PHP)
- Files deployed to `public_html`

---

## 4. 🔌 API Specification

### Endpoint

- Path: `POST /api/contact.php`
- Header: `Content-Type: application/json`

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Message content"
}
```

### Success Response

```json
{
  "success": true
}
```

### Error Response

```json
{
  "success": false,
  "error": "Validation error"
}
```

---

## 5. 🧠 Backend (PHP) Requirements

### Functional

- Parse JSON from `php://input`
- Validate:
  - Email (correct format)
  - Message (minimum length)
- Send email:
  - Preferred: SMTP
  - Fallback: `mail()`
- Return JSON response

### 🔐 Security

- Optional CORS support
- Sanitize inputs (`htmlspecialchars`)
- Honeypot field (`company` – hidden)
- Optional rate limiting

### 📄 Minimal Endpoint (MVP)

```php
<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  echo json_encode(["success" => false]);
  exit;
}

$name = htmlspecialchars($data["name"]);
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars($data["message"]);

if (!$email || strlen($message) < 5) {
  echo json_encode(["success" => false, "error" => "Validation"]);
  exit;
}

$to = "your@email.com";
$subject = "Contact Form Submission";

$body = "Name: $name\nEmail: $email\n\n$message";

mail($to, $subject, $body);

echo json_encode(["success" => true]);
?>
```

---

## 6. ⚛️ Frontend (React)

### Form Fields

- Name
- Email
- Message

### Honeypot Field

```html
<input type="text" name="company" style="display:none" />
```

### Fetch Request Example

```js
await fetch("/api/contact.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

### UX Requirements

- Loading state
- Success message
- Error message
