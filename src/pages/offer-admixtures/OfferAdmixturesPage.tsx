import { useTranslation } from "react-i18next";
import PageHero from "../../components/PageHero";
import Seo from "../../components/Seo";
import { useSeo } from "../../hooks/useSeo";
import concreteImg from "../../assets/building-construction-concrete.jpg";
import AdmixturesIntroSection from "./components/AdmixturesIntroSection";
import ProductSection from "./components/ProductSection";
import AdmixturesCTASection from "./components/AdmixturesCTASection";
import { productCategories } from "./data/products";

export default function OfferAdmixturesPage() {
  const { t } = useTranslation("offer");
  const seo = useSeo("offerAdmixtures");

  return (
    <>
      <Seo {...seo} />
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={concreteImg}
        overlayIntensity="dark"
      />
      <AdmixturesIntroSection />
      {productCategories.map((category, i) => (
        <ProductSection
          key={category.id}
          category={category}
          variant={i % 2 === 0 ? "white" : "slate"}
        />
      ))}
      <AdmixturesCTASection />
    </>
  );
}
