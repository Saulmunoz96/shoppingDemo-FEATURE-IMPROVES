import { createContext, useState } from "react";
import { Product, ProductCart } from "../utils/interfaces/Product";
import { toast } from "sonner";
import { CartContextInterface } from "../utils/interfaces/CartContext.inteface";

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex((item: ProductCart) => {
      console.log(item, product);

      return item.idProduct === product.idProduct;
    });

    if (productInCartIndex >= 0) {
      const newCart: ProductCart[] = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      toast.success(
        `Item ${product.title}  ahora tiene ${newCart[productInCartIndex].quantity}  unidades`,
      );
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
    toast.success(`Item ${product.title}  agregado correctamente`);
  };

  const removeFromCart = (product: Product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
    toast.info(`Item ${product.title} se ha borrado correctamente`);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
