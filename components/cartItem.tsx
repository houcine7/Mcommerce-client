"use client";

import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import { Button } from "./ui/button";

export const CarItem = ({
  name,
  picture,
  price,
  brand,
  quantity,
  id,
}: {
  id: string;
  name: string;
  price: number;
  brand: string;
  quantity: number;
  picture: string;
}) => {
  const { setCart } = useContext(CartContext);

  const incrementQuantity = () => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity + 1,
          };
        }
        return item;
      });
    });
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      });
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={picture}
          alt={name}
          className="rounded-full w-11 h-11 object-cover object-center"
        />
        <div className="flex flex-col justify-center text-sm">
          <p className="font-light">{name}</p>
          <p className="font-bold"> {brand}</p>
        </div>
      </div>

      <div>
        <p className="text-bold text-lg">MAD{price}</p>
      </div>
      <div className="flex items-center">
        <Button
          variant={"outline"}
          className="w-8 h-8 font-extrabold"
          onClick={incrementQuantity}
        >
          +
        </Button>
        <p className="mx-2">{quantity}</p>
        <Button
          variant={"outline"}
          className="w-8 h-8 font-extrabold"
          aria-disabled={quantity == 0}
          onClick={decrementQuantity}
        >
          -
        </Button>
      </div>
    </div>
  );
};
