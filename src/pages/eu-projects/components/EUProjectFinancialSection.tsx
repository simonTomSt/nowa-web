import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

const statValues = ["1 433 023,80 PLN", "1 165 060,00 PLN", "879 969,82 PLN"];
const statKeys = ["totalExpenditure", "eligibleExpenditure", "coFinancing"] as const;

export default function EUProjectFinancialSection() {
  const { t } = useTranslation("euProjects");

  return (
    <section className="relative bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-32 w-[500px] opacity-15 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 rounded-full bg-accent shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("financial.heading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statKeys.map((key, i) => (
              <div
                key={key}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-accent leading-tight">
                  {statValues[i]}
                </p>
                <p className="mt-2 text-sm text-gray-500">{t(`financial.stats.${key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
