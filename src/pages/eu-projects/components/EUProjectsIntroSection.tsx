import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function EUProjectsIntroSection() {
  const { t } = useTranslation("euProjects");

  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {t("intro.heading")}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("intro.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
