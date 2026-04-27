import { FlaskConical, Sparkles, Clock, Link2, Wind, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

const blockIcons: LucideIcon[] = [FlaskConical, Sparkles, Clock, Link2, Wind, Layers];

interface WorkBlockTranslation {
  title: string;
  description: string;
}

export default function HowAdmixturesWorkSection() {
  const { t } = useTranslation("admixtures");
  const items = t("howWork.items", { returnObjects: true }) as WorkBlockTranslation[];

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-24 w-[420px] opacity-35 select-none"
      />
      <Container className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center tracking-tight mb-14">
          {t("howWork.heading")}
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col">
          {items.map(({ title, description }, i) => {
            const Icon = blockIcons[i];
            return (
              <div
                key={i}
                className={`flex gap-6 px-6 py-10 rounded-2xl ${i % 2 !== 0 ? "bg-slate-50" : ""}`}
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="text-accent" size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
