import { Target, ShieldCheck, Heart, TrendingUp, Users, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

const valueIcons: LucideIcon[] = [Target, ShieldCheck, Heart, TrendingUp, Users, Leaf];
const valueKeys = ["perfectionism", "reliability", "honesty", "development", "cooperation", "ecology"] as const;

export default function AboutValuesSection() {
  const { t } = useTranslation("about");

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-40 w-[500px] opacity-30 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {t("values.heading")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("values.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueKeys.map((key, i) => {
            const Icon = valueIcons[i];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon size={20} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-gray-900">{t(`values.items.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`values.items.${key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
