import { Category } from "./category";
import { Sale } from "./sale";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  category: Category;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[];
  sale: Sale;
};
