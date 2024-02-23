import { Product, ProductCart } from "./Product";

export interface CartContextInterface {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}
