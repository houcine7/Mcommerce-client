"use client";

import { useContext, useState } from "react";
import { Input } from "./ui/input";
import { CartContext } from "@/context/cartContext";
import { getProperName } from "@/utils/strings";
import { saveCartCountToLocalStorage } from "@/utils/storage";

type ProductDetailsType = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
  id: string;
};

export const ProductDetails = ({
  name,
  description,
  price,
  quantity,
  img,
  id,
}: ProductDetailsType) => {
  const { setCart } = useContext(CartContext);
  const [choseQuantity, setQuantity] = useState(1);

  const addToCart = () => {
    //
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity = choseQuantity;
        return newCart;
      } else {
        const newCart = [
          ...prevCart,
          {
            category: "test1",
            id,
            description,
            image: img,
            price,
            quantity: choseQuantity,
            title: getProperName(name),
          },
        ];
        saveCartCountToLocalStorage(prevCart);
        return newCart;
      }
    });
  };

  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-center space-x-20 mt-28 mx-20 mb-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        className="w-auto h-80 mx-auto mb-4 shadow-sm rounded-md"
        alt={"test"}
      />
      <div>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full p-2 text-lg">
            <h4 className="text-xl font-bold">Price:</h4>
            <p className="text-gray-700">{price}</p>
          </div>
          <div className="w-full p-2 text-lg">
            <h4 className="text-xl font-bold">Quantity:</h4>
            <Input
              type="number"
              max={quantity}
              min={0}
              className="block w-full p-2 text-gray-900"
              value={choseQuantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={addToCart}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
