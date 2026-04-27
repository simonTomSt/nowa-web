import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function EUProjectDetailsSection() {
  const { t } = useTranslation("euProjects");

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-accent shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("details.heading")}
            </h2>
          </div>

          <div className="space-y-5 text-base text-gray-600 leading-relaxed">
            <p>{t("details.p1")}</p>
            <p>{t("details.p2")}</p>
            <p>{t("details.p3")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
