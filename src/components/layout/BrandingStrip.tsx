import { useTranslation } from "react-i18next";
import euLogos from "../../assets/eu_logos.png";
import Container from "./Container";
import { getRoute, type Lang } from "../../i18n/routes";

interface BrandingStripProps {
  lang: Lang;
}

export default function BrandingStrip({ lang }: BrandingStripProps) {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white border-t border-gray-200">
      <Container className="py-6 flex justify-center">
        <a href={getRoute("euProjects", lang)} aria-label={t("euProjectsAriaLabel")}>
          <img
            src={euLogos}
            alt={t("branding.euLogosAlt")}
            className="max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>
      </Container>
    </section>
  );
}
