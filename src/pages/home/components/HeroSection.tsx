import React from "react";
import { useTranslation } from "react-i18next";
import labImage from "../../../assets/lab.jpg";
import Container from "../../../components/layout/Container";
import { useLocale } from "../../../hooks/useLocale";

export default function HeroSection() {
  const { t } = useTranslation("home");
  const { getRoute } = useLocale();

  return (
    <section
      className="relative flex items-center min-h-[85vh] sm:min-h-[80vh] bg-cover bg-center bg-[image:var(--hero-bg)]"
      style={{ "--hero-bg": `url(${labImage})` } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.55)]" />

      <Container className="relative z-10 pt-36 pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            {t("hero.headline")}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
            {t("hero.subtext")}
          </p>
          <div className="mt-10">
            <a
              href={getRoute("aboutAdmixtures")}
              className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-accent text-accent-foreground font-semibold text-base shadow-lg shadow-black/20 hover:bg-accent/90 transition-colors duration-150"
            >
              {t("hero.ctaLabel")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
