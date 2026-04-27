import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import { useLocale } from "../../../hooks/useLocale";

export default function ServicesCTASection() {
  const { t } = useTranslation("services");
  const { getRoute } = useLocale();

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            {t("cta.heading")}
          </h2>
          <div className="mt-8">
            <a
              href={getRoute("contact")}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-150 shadow-lg shadow-accent/30"
            >
              {t("cta.contactUs")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
