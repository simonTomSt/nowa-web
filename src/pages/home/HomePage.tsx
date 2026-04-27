import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import { organizationSchema } from "../../seo/schemas";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ValuePropositionSection from "./components/ValuePropositionSection";

export default function HomePage() {
  const seo = useSeo("home");

  return (
    <>
      <Seo {...seo} jsonLd={organizationSchema} />
      <HeroSection />
      <ServicesSection />
      <WhoWeAreSection />
      <ValuePropositionSection />
    </>
  );
}
