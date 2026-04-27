import { CheckCircle2 } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm p-5 gap-3">
      <h3 className="font-semibold text-gray-900 text-base leading-snug">{product.name}</h3>
      {product.description && (
        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
      )}
      {product.features && product.features.length > 0 && (
        <ul className="space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-accent" />
              <span className="text-sm text-gray-700 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
