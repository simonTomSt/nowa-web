import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Checkbox } from "@heroui/react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";

type Status = "idle" | "loading" | "success" | "error";

const ERROR_CODE_KEYS: Record<string, string> = {
  name_required: "form.errorNameRequired",
  email_invalid: "form.errorEmailInvalid",
  message_too_short: "form.errorMessageTooShort",
  gdpr_required: "form.gdprError",
  rate_limited: "form.errorRateLimited",
  send_failed: "form.errorMessage",
  invalid_request: "form.errorMessage",
  method_not_allowed: "form.errorMessage",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150";

export default function ContactFormSection() {
  const { t } = useTranslation("contact");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [gdpr, setGdpr] = useState(false);
  const [gdprError, setGdprError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!gdpr) {
      setGdprError(true);
      return;
    }

    setGdprError(false);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company, gdpr }),
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setGdpr(false);
      } else {
        setStatus("error");
        const key = ERROR_CODE_KEYS[json.code] ?? "form.errorMessage";
        setErrorMessage(t(key));
      }
    } catch {
      setStatus("error");
      setErrorMessage(t("form.errorMessage"));
    }
  }

  const isLoading = status === "loading";

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              {t("form.heading")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              {t("form.description")}
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-800">
              <CheckCircle size={20} className="mt-0.5 shrink-0" />
              <p className="text-sm font-medium">{t("form.successMessage")}</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("form.nameLabel")} <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("form.namePlaceholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("form.emailLabel")} <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("form.emailPlaceholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("form.messageLabel")} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("form.messagePlaceholder")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                <p
                  id="gdpr-label"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
                >
                  {t("form.gdprLabel")} <span className="text-accent">*</span>
                </p>
                <Checkbox
                  isSelected={gdpr}
                  onChange={setGdpr}
                  isRequired
                  aria-labelledby="gdpr-label"
                >
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {t("form.gdprText")}
                    </span>
                  </Checkbox.Content>
                </Checkbox>
                {gdprError && (
                  <p className="mt-2 text-xs text-red-600">{t("form.gdprError")}</p>
                )}
              </div>

              {status === "error" && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-800">
                  <AlertCircle size={20} className="mt-0.5 shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-150 shadow-lg shadow-accent/30 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t("form.sending")}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t("form.send")}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
