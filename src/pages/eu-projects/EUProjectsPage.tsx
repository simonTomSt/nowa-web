import { useTranslation } from "react-i18next";
import PageHero from "../../components/PageHero";
import architectureImg from "../../assets/architecture.jpg";
import EUProjectsIntroSection from "./components/EUProjectsIntroSection";
import EUProjectOverviewCard from "./components/EUProjectOverviewCard";
import EUProjectDetailsSection from "./components/EUProjectDetailsSection";
import EUProjectFinancialSection from "./components/EUProjectFinancialSection";
import EUProjectTimelineSection from "./components/EUProjectTimelineSection";

export default function EUProjectsPage() {
  const { t } = useTranslation("euProjects");

  return (
    <>
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={architectureImg}
        overlayIntensity="dark"
      />
      <EUProjectsIntroSection />
      <EUProjectOverviewCard />
      <EUProjectDetailsSection />
      <EUProjectFinancialSection />
      <EUProjectTimelineSection />
    </>
  );
}
