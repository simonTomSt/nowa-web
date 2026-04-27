import { useTranslation } from "react-i18next";
import PageHero from "../../components/PageHero";
import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import constructionWorkerImg from "../../assets/construction-worker.jpg";
import AboutIntroSection from "./components/AboutIntroSection";
import AboutCompanySection from "./components/AboutCompanySection";
import AboutValuesSection from "./components/AboutValuesSection";
import AboutFAQSection from "./components/AboutFAQSection";

export default function AboutUsPage() {
  const { t } = useTranslation("about");
  const seo = useSeo("aboutUs");

  return (
    <>
      <Seo {...seo} />
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
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
