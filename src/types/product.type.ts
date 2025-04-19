// types/product.ts
export interface Product {
  id: string;
  baseProduct: {
    image: string;
    name: string;
    description: string;
    price: string;
  };
  newPrice?: string;
  originalPrice?: string;
  priceGr?: string;
  badges?: {
    discount?: number;
    isExclusive?: boolean;
  };
}
