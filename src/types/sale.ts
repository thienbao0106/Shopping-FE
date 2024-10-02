import { Product } from "./product";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Sale = {
  id: number;
  name: string;
  description: string;
  percentage: number;
  images: any[];
  products: Product[];
  dueDate: Date;
};
