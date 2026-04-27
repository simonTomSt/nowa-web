import architectureImg from "../../assets/architecture.jpg";
import PageHero from "../../components/PageHero";
import AdmixtureAdvantagesSection from "./components/AdmixtureAdvantagesSection";
import WhatAreAdmixturesSection from "./components/WhatAreAdmixturesSection";
import AdmixtureTypesSection from "./components/AdmixtureTypesSection";
import AdmixturesSummarySection from "./components/AdmixturesSummarySection";
import HowAdmixturesWorkSection from "./components/HowAdmixturesWorkSection";
import AdmixturesClosingSection from "./components/AdmixturesClosingSection";

export default function AboutAdmixturesPage() {
  return (
    <>
      <PageHero
        title="About admixtures"
        description="The use of admixtures for concrete has many advantages and benefits that have a positive impact on the quality and properties of this material."
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
