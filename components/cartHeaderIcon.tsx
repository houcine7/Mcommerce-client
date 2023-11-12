"use client";
import { useContext, useEffect, useState } from "react";
import { CartIcon } from "./svg/Cart";
import { CartContext } from "@/context/cartContext";
import { checkCartChanged, saveCartCountToLocalStorage } from "@/utils/storage";

export const CartHeader = () => {
  const { setIsVisible, cart } = useContext(CartContext);

  const [showBadge, setShowBadge] = useState<boolean>(false);

  useEffect(() => {
    const stBadge = checkCartChanged(cart);
    setShowBadge(stBadge);
    return () => {
      setShowBadge(false);
    };
  }, [cart]);

  const handelCartCLick = () => {
    setShowBadge(false);
    saveCartCountToLocalStorage(cart);
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  //
  return (
    <span
      className=" relative inline-block cursor-pointer px-3"
      onClick={handelCartCLick}
    >
      <CartIcon />
      {showBadge && (
        <p className="absolute bg-red-500 top-0 right-0 w-[10px] z-50 h-[10px] rounded-full">
          {" "}
        </p>
      )}
    </span>
  );
};
