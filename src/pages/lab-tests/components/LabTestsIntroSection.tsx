import { Microscope, ShieldCheck, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

const pillarIcons: LucideIcon[] = [Microscope, ShieldCheck, FileText];
const pillarKeys = ["precision", "certified", "documentation"] as const;

export default function LabTestsIntroSection() {
  const { t } = useTranslation("labTests");

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {t("intro.heading")}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("intro.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillarKeys.map((key, i) => {
            const Icon = pillarIcons[i];
            return (
              <div
                key={key}
                className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-7"
              >
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t(`intro.pillars.${key}.label`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`intro.pillars.${key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
