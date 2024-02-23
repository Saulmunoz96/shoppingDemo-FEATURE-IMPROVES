import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const useCart = () => {
  const cart = useContext(CartContext);

  if (cart === undefined) {
    throw new Error("use cart with Car Provider");
  }

  return cart;
};
