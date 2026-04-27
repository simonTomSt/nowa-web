import { FlaskConical, ClipboardCheck, Beaker, Cog, Wrench, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import ServiceCard from "./ServiceCard";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import blobGrad from "../../../assets/blob-grad.svg";
import { useLocale } from "../../../hooks/useLocale";

const serviceIcons = [FlaskConical, ClipboardCheck, Beaker, Cog, Wrench, Layers];
const serviceKeys = ["labTests", "audit", "admixtures", "productionTechnology", "machinery", "rawMaterials"] as const;

export default function ServicesSection() {
  const { t } = useTranslation("home");
  const { getRoute } = useLocale();

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[520px] opacity-70 select-none"
      />
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-36 w-[480px] opacity-60 select-none"
      />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              {t("services.heading")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              {t("services.description")}
            </p>
          </div>
          <a
            href={getRoute("offerLabTests")}
            className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-accent text-accent-foreground font-semibold text-base shadow-sm hover:bg-accent/90 transition-colors duration-150 shrink-0"
          >
            {t("services.checkOffer")}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => (
            <ServiceCard
              key={key}
              icon={serviceIcons[i]}
              title={t(`services.items.${key}.title`)}
              description={t(`services.items.${key}.description`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
