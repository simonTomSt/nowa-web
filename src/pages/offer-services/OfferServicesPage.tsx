import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import PageHero from "../../components/PageHero";
import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import { useLocale } from "../../hooks/useLocale";
import constructionImg from "../../assets/construction-material.jpg";
import labImg from "../../assets/lab-tests.jpg";
import measuringImg from "../../assets/measuring.jpeg";
import pexelsImg from "../../assets/pexels-pixabay.jpg";
import workerImg from "../../assets/construction-worker.jpg";
import cementImg from "../../assets/cement.jpg";
import ServicesIntroSection from "./components/ServicesIntroSection";
import ServicesNavSection from "./components/ServicesNavSection";
import ServiceSection from "./components/ServiceSection";
import ServicesCTASection from "./components/ServicesCTASection";

const SECTION_IDS = [
  "lab-tests",
  "audit",
  "production",
  "machinery",
  "raw-materials",
] as const;

export default function OfferServicesPage() {
  const { t } = useTranslation("services");
  const seo = useSeo("offerServices");
  const { getRoute } = useLocale();
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -40% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Seo {...seo} />
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={constructionImg}
        overlayIntensity="dark"
      />
      <ServicesIntroSection />
      <ServicesNavSection activeSection={activeSection} />
      <ServiceSection
        id="lab-tests"
        title={t("labTests.title")}
        description={t("labTests.description")}
        image={labImg}
        imageAlt={t("labTests.title")}
        imagePosition="right"
        background="white"
        ctaLabel={t("labTests.cta.label")}
        ctaHref={getRoute("offerLabTests")}
      />
      <ServiceSection
        id="audit"
        title={t("audit.title")}
        description={t("audit.description")}
        image={measuringImg}
        imageAlt={t("audit.title")}
        imagePosition="left"
        background="slate"
      />
      <ServiceSection
        id="production"
        title={t("production.title")}
        description={t("production.description")}
        image={pexelsImg}
        imageAlt={t("production.title")}
        imagePosition="right"
        background="white"
      />
      <ServiceSection
        id="machinery"
        title={t("machinery.title")}
        description={t("machinery.description")}
        image={workerImg}
        imageAlt={t("machinery.title")}
        imagePosition="left"
        background="slate"
      />
      <ServiceSection
        id="raw-materials"
        title={t("rawMaterials.title")}
        description={t("rawMaterials.description")}
        image={cementImg}
        imageAlt={t("rawMaterials.title")}
        imagePosition="right"
        background="white"
      />
      <ServicesCTASection />
    </>
  );
}
