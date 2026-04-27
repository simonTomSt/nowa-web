import { useTranslation } from "react-i18next";
import architectureImg from "../../assets/architecture.jpg";
import PageHero from "../../components/PageHero";
import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import AdmixtureAdvantagesSection from "./components/AdmixtureAdvantagesSection";
import WhatAreAdmixturesSection from "./components/WhatAreAdmixturesSection";
import AdmixtureTypesSection from "./components/AdmixtureTypesSection";
import AdmixturesSummarySection from "./components/AdmixturesSummarySection";
import HowAdmixturesWorkSection from "./components/HowAdmixturesWorkSection";
import AdmixturesClosingSection from "./components/AdmixturesClosingSection";

export default function AboutAdmixturesPage() {
  const { t } = useTranslation("admixtures");
  const seo = useSeo("aboutAdmixtures");

  return (
    <>
      <Seo {...seo} />
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={architectureImg}
      />
      <WhatAreAdmixturesSection />
      <AdmixtureAdvantagesSection />
      <AdmixtureTypesSection />
      <AdmixturesSummarySection />
      <HowAdmixturesWorkSection />
      <AdmixturesClosingSection />
    </>
  );
}
