import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import blobGrad from "../../../assets/blob-grad.svg";

export default function AdmixtureAdvantagesSection() {
  const { t } = useTranslation("admixtures");
  const items = t("advantages.items", { returnObjects: true }) as string[];

  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[500px] opacity-50 select-none"
      />
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-32 w-[460px] opacity-40 select-none"
      />
      <Container className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center tracking-tight mb-12">
          {t("advantages.heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
            >
              <CheckCircle2 className="shrink-0 mt-0.5 text-accent" size={22} />
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
