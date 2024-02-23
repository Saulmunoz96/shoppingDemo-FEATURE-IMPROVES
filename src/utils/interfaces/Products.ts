import { Product } from "./Product";

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
