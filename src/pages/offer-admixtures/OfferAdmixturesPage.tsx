import PageHero from "../../components/PageHero";
import concreteImg from "../../assets/building-construction-concrete.jpg";
import AdmixturesIntroSection from "./components/AdmixturesIntroSection";
import ProductSection from "./components/ProductSection";
import AdmixturesCTASection from "./components/AdmixturesCTASection";
import { productCategories } from "./data/products";

export default function OfferAdmixturesPage() {
  return (
    <>
      <PageHero
        title="Chemical admixtures"
        description="High-performance admixtures for aerated and ready-mix concrete — developed and produced by our team for the construction industry."
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
