import {
  ClipboardCheck, FlaskConical, Settings2, TestTube2, BarChart3, FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

const serviceIcons: LucideIcon[] = [ClipboardCheck, FlaskConical, Settings2, TestTube2, BarChart3, FileText];
const serviceKeys = ["rawMaterial", "recipe", "admixture", "testing", "quality", "documentation"] as const;

export default function LabScopeOfServicesSection() {
  const { t } = useTranslation("labTests");

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {t("scope.heading")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("scope.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon size={20} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-gray-900">{t(`scope.services.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`scope.services.${key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
