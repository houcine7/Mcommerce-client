import { createContext } from "react";
export const INITIAL_CONTEXT = {
  cart: [] as CartItemType[],
  setCart: (() => {}) as React.Dispatch<React.SetStateAction<CartItemType[]>>,
  isVisible: false,
  setIsVisible: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
};

export type CartContextPops = {
  children: React.ReactNode;
};

export type CartItemType = {
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

export const CartContext = createContext(INITIAL_CONTEXT);
