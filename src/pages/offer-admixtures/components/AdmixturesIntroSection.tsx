import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function AdmixturesIntroSection() {
  const { t } = useTranslation("offer");

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t("intro.text")}
          </p>
          <div className="mt-8">
            <a
              href="#aerated"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-white transition-colors duration-150"
            >
              {t("intro.learnMore")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
