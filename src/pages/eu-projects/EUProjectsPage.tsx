import PageHero from "../../components/PageHero";
import architectureImg from "../../assets/architecture.jpg";
import EUProjectsIntroSection from "./components/EUProjectsIntroSection";
import EUProjectOverviewCard from "./components/EUProjectOverviewCard";
import EUProjectDetailsSection from "./components/EUProjectDetailsSection";
import EUProjectFinancialSection from "./components/EUProjectFinancialSection";
import EUProjectTimelineSection from "./components/EUProjectTimelineSection";

export default function EUProjectsPage() {
  return (
    <>
      <PageHero
        title="Projekty UE"
        description="Projekty współfinansowane ze środków Unii Europejskiej w ramach Europejskiego Funduszu Rozwoju Regionalnego."
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
