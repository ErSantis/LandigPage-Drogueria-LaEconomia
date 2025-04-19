// data/products.ts
import { Product } from "../types/product.type";

const baseProduct = {
  image: "ponds-cream.png",
  name: "Crema Pond's Clarant B3",
  description: "Piel Normal a Grasa Porf...",
  price: "10250",
};

export const products: Product[] = [
  {
    id: "1",
    baseProduct: {
      ...baseProduct,
    },
    priceGr: "109",
  },
  {
    id: "2",
    baseProduct: {
      ...baseProduct,
    },
    originalPrice: "21550",
    priceGr: "109",
    badges: {
      discount: 20,
      isExclusive: true,
    },
  },
  {
    id: "3",
    baseProduct: {
      ...baseProduct,
    },
  },
  {
    id: "4",
    baseProduct: {
      ...baseProduct,
    },
    newPrice: "21550",
  },
  {
    id: "5",
    baseProduct: {
      ...baseProduct,
    },
    originalPrice: "21550",
    priceGr: "109",
    badges: {
      discount: 20,
    },
  },
  {
    id: "6",
    baseProduct: {
      ...baseProduct,
    },
    originalPrice: "21550",
    priceGr: "109",
    badges: {
      discount: 20,
    },
  },
];
