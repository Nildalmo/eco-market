import { iCartProduct, iProduct } from "@/types/stores";
import { Notify } from "@/components/Notify";
import { iCartContext } from "@/types/context";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export const CartContext = createContext<iCartContext>({} as iCartContext);
const Cartprovider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<iCartProduct[]>([]);

  const addToCart = (product: iCartProduct) => {
    const hasProduct = cartProducts.findIndex((item) => item.id === product.id);

    let productsCopy = [...cartProducts];

    if (hasProduct) {
      productsCopy[hasProduct].amount += 1;
      setCartProducts(productsCopy);
    } else {
      const productsCopy = { ...product, amount: 1 };
      setCartProducts([...cartProducts, productsCopy]);
    }
    Notify("success", "Produto adicionado à sacola!");
  };
  const removeToCart = (id: number) =>
    setCartProducts(cartProducts.filter((item) => item.id !== id));

  const total = useMemo(
    () => cartProducts.reduce((act, cur) => act + (cur.amount * cur.preco), 0),
    [cartProducts]
  );

  return (
    <CartContext.Provider value={{ addToCart, removeToCart, cartProducts,total }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
export const useCart = () => useContext(CartContext);
