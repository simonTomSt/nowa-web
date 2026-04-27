import PageHero from "../../components/PageHero";
import constructionWorkerImg from "../../assets/construction-worker.jpg";
import AboutIntroSection from "./components/AboutIntroSection";
import AboutCompanySection from "./components/AboutCompanySection";
import AboutValuesSection from "./components/AboutValuesSection";
import AboutFAQSection from "./components/AboutFAQSection";

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About us"
        description="A family-rooted company built on innovation, precision, and more than 10 years of expertise in the concrete industry."
        backgroundImage={constructionWorkerImg}
        overlayIntensity="medium"
      />
      <AboutIntroSection />
      <AboutCompanySection />
      <AboutValuesSection />
      <AboutFAQSection />
    </>
  );
}
