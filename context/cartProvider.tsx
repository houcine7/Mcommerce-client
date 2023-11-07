"use client";

import { useState } from "react";
import { CartContext, CartContextPops, CartItemType } from "./cartContext";

export const CartContextProvider = ({ children }: CartContextPops) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CartContext.Provider value={{ cart, isVisible, setCart, setIsVisible }}>
      {children}
    </CartContext.Provider>
  );
};
