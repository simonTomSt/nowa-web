import { Calendar, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";

export default function EUProjectTimelineSection() {
  const { t } = useTranslation("euProjects");

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-accent shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("timeline.heading")}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100 px-6 py-5 flex-1">
              <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Calendar size={20} />
              </span>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                  {t("timeline.implementationPeriod")}
                </p>
                <p className="text-base font-semibold text-gray-800">
                  {t("timeline.dates")}
                </p>
              </div>
            </div>

            <a
              href="https://www.mapadotacji.gov.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100 px-6 py-5 flex-1 hover:border-accent/30 hover:bg-accent/5 transition-colors group"
            >
              <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <ExternalLink size={20} />
              </span>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                  {t("timeline.moreInfo")}
                </p>
                <p className="text-base font-semibold text-gray-800 group-hover:text-accent transition-colors">
                  {t("timeline.mapLink")}
                </p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
