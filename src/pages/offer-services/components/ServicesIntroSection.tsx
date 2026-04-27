import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function ServicesIntroSection() {
  const { t } = useTranslation("services");

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t("intro.text")}
          </p>
        </div>
      </Container>
    </section>
  );
}
