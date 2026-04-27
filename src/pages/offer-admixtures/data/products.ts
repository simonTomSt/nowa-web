export interface Product {
  name: string;
}

export interface ProductCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "aerated",
    titleKey: "categories.aerated.title",
    descriptionKey: "categories.aerated.description",
    products: [
      { name: "Porplast-1" },
      { name: "Porplast-2" },
      { name: "Porplast-H" },
      { name: "Porplast-NF" },
      { name: "Sulfomiks-20" },
      { name: "Sulfomiks-35" },
    ],
  },
  {
    id: "ready-mix",
    titleKey: "categories.readyMix.title",
    descriptionKey: "categories.readyMix.description",
    products: [
      { name: "Poliplast-1" },
      { name: "Poliplast-2" },
      { name: "Poliplast-3" },
      { name: "Superplast-100" },
      { name: "Superplast-150" },
      { name: "Superplast-440" },
      { name: "Superplast-500" },
      { name: "Ultraplast-100" },
      { name: "Ultraplast-110" },
      { name: "Ultraplast-300" },
      { name: "Ultraplast-310" },
      { name: "Ultraplast-700" },
      { name: "Wibroplast" },
    ],
  },
];
