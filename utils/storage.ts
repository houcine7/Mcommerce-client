"use client";
import { CartItemType } from "@/context/cartContext";

export const saveCartCountToLocalStorage = (cart: CartItemType[]) => {
  localStorage.setItem("cart", JSON.stringify(cart.length));
};

export const checkCartChanged = (currCart: CartItemType[]): boolean => {
  if (window == undefined) return false; // because of server side
  const prevCount = Number(window.localStorage?.getItem("cart") || 0);
  if (prevCount < currCart?.length) {
    return true;
  } else {
    return false;
  }
};
