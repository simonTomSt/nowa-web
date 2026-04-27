import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function WhatAreAdmixturesSection() {
  const { t } = useTranslation("admixtures");

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-28 w-[440px] opacity-40 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
            {t("whatAre.heading")}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("whatAre.text")}
          </p>
        </div>
      </Container>
    </section>
  );
}
