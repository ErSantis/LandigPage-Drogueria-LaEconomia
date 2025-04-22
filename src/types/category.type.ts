export interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  products: {
    id: number;
    image: string;
    name: string;
  }[];
}
