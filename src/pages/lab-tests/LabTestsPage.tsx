import { useTranslation } from "react-i18next";
import PageHero from "../../components/PageHero";
import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import labImg from "../../assets/lab.jpg";
import LabTestsIntroSection from "./components/LabTestsIntroSection";
import LabTestCategoriesSection from "./components/LabTestCategoriesSection";
import LabScopeOfServicesSection from "./components/LabScopeOfServicesSection";
import LabCredibilitySection from "./components/LabCredibilitySection";
import LabCTASection from "./components/LabCTASection";

export default function LabTestsPage() {
  const { t } = useTranslation("labTests");
  const seo = useSeo("offerLabTests");

  return (
    <>
      <Seo {...seo} />
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
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
