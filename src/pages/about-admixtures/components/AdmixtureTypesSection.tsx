import {
  FlaskConical, Sparkles, Droplets, Wind, Timer, Zap, ShieldCheck, Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

const typeIcons: LucideIcon[] = [FlaskConical, Sparkles, Droplets, Wind, Timer, Zap, ShieldCheck, Layers];

interface AdmixtureTypeTranslation {
  name: string;
  description: string;
}

export default function AdmixtureTypesSection() {
  const { t } = useTranslation("admixtures");
  const items = t("types.items", { returnObjects: true }) as AdmixtureTypeTranslation[];

  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-28 w-[460px] opacity-40 select-none"
      />
      <Container className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center tracking-tight mb-12">
          {t("types.heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ name, description }, i) => {
            const Icon = typeIcons[i];
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-5"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    {i + 1}
                  </span>
                  <Icon className="text-accent opacity-70" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
