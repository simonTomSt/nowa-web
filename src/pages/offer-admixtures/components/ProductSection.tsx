import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import ProductCard from "./ProductCard";
import type { ProductCategory } from "../data/products";

interface ProductSectionProps {
  category: ProductCategory;
  variant?: "white" | "slate";
}

export default function ProductSection({ category, variant = "white" }: ProductSectionProps) {
  const { t } = useTranslation("offer");
  const bg = variant === "slate" ? "bg-slate-50" : "bg-white";
  const blobRight = variant === "slate";

  return (
    <section id={category.id} className={`relative ${bg} py-20 lg:py-28 overflow-hidden`}>
      <img
        src={blobRight ? bgBlobGradient : blobGrad}
        aria-hidden="true"
        className={`pointer-events-none absolute select-none opacity-20 w-[420px] ${
          blobRight ? "-top-16 -right-32" : "-bottom-20 -left-28"
        }`}
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {t(category.titleKey)}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t(category.descriptionKey)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
