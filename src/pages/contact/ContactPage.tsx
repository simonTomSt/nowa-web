import { useTranslation } from "react-i18next";
import PageHero from "../../components/PageHero";
import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import architectureImg from "../../assets/architecture.jpg";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactMapSection from "./components/ContactMapSection";
import ContactFormSection from "./components/ContactFormSection";
import ContactCTASection from "./components/ContactCTASection";

export default function ContactPage() {
  const { t } = useTranslation("contact");
  const seo = useSeo("contact");

  return (
    <>
      <Seo {...seo} />
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={architectureImg}
        overlayIntensity="medium"
      />
      <ContactInfoSection />
      <ContactMapSection />
      <ContactFormSection />
      <ContactCTASection />
    </>
  );
}
