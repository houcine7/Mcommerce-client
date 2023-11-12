"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export const CartEmpty = ({
  setIsVisible,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-8 flex-col mt-6">
      <Image
        src="/images/empty-cart.png"
        alt="indicator"
        width={300}
        height={300}
        className="h-auto "
      />
      <h1 className="text-center font-bold text-lg">
        Your cart is now empty Consider adding some items to it
      </h1>
      <Button variant={"destructive"} onClick={() => setIsVisible(false)}>
        back to shop
      </Button>
    </div>
  );
};
