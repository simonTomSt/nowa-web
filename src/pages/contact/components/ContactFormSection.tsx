import { useState } from "react";
import { Send } from "lucide-react";
import { Checkbox } from "@heroui/react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";

export default function ContactFormSection() {
  const { t } = useTranslation("contact");
  const [gdpr, setGdpr] = useState(false);

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

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t("form.emailLabel")} <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder={t("form.emailPlaceholder")}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150"
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
                placeholder={t("form.messagePlaceholder")}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 resize-none"
              />
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <p id="gdpr-label" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {t("form.gdprLabel")} <span className="text-accent">*</span>
              </p>
              <Checkbox isSelected={gdpr} onChange={setGdpr} isRequired aria-labelledby="gdpr-label">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {t("form.gdprText")}
                  </span>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-150 shadow-lg shadow-accent/30 cursor-pointer"
            >
              <Send size={18} />
              {t("form.send")}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
