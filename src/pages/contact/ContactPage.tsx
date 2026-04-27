import PageHero from "../../components/PageHero";
import architectureImg from "../../assets/architecture.jpg";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactMapSection from "./components/ContactMapSection";
import ContactFormSection from "./components/ContactFormSection";
import ContactCTASection from "./components/ContactCTASection";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Contact us and get support, answers to your questions and solutions to your problems. We are here for you!"
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
