import PageHero from "../../components/PageHero";
import labImg from "../../assets/lab.jpg";
import LabTestsIntroSection from "./components/LabTestsIntroSection";
import LabTestCategoriesSection from "./components/LabTestCategoriesSection";
import LabScopeOfServicesSection from "./components/LabScopeOfServicesSection";
import LabCredibilitySection from "./components/LabCredibilitySection";
import LabCTASection from "./components/LabCTASection";

export default function LabTestsPage() {
  return (
    <>
      <PageHero
        title="Laboratory tests"
        description="Comprehensive material testing for concrete, aggregates, masonry elements, and mortars — performed to European and Polish standards."
        backgroundImage={labImg}
        overlayIntensity="dark"
      />
      <LabTestsIntroSection />
      <LabTestCategoriesSection />
      <LabScopeOfServicesSection />
      <LabCredibilitySection />
      <LabCTASection />
    </>
  );
}
