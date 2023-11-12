"use client";

import { CartContext } from "@/context/cartContext";
import { saveCartCountToLocalStorage } from "@/utils/storage";
import Link from "next/link";
import { useContext } from "react";
type ProductCardType = {
  title: string;
  price: number;
  image: string;
  brand: string;
  discount: number;
  description: string;
  quantity?: number;
  id: string;
};

export const ProductCard = ({
  title,
  price,
  image,
  brand,
  discount,
  description,
  id,
}: ProductCardType) => {
  const { setCart } = useContext(CartContext);

  const handleAddToCart = (item: ProductCardType) => {
    setCart((prevCartItems) => {
      const indexItem = prevCartItems.findIndex((cartItem) => {
        return cartItem.id === item.id;
      });
      if (indexItem !== -1) {
        const newCart = [...prevCartItems];
        return newCart;
      } else {
        const newCart = [
          ...prevCartItems,
          {
            title: item.title,
            // brand: "test",
            image: item.image,
            // discount: item.discount,
            description: item.description,
            id: item.id,
            price: item.price,
            quantity: 1,
            category: item.brand,
          },
        ];
        saveCartCountToLocalStorage(prevCartItems);
        return newCart;
      }
    });
    return;
  };

  return (
    <Link
      className="w-80 bg-white shadow-md rounded-xl duration-500 hover:shadow-2xl"
      href={`/shop/products/${id}`}
    >
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={image}
          alt="Product"
          className="h-64 w-80 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              MAD{price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
            </del>
            <button
              className="ml-auto font-extrabold text-lg hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart({
                  title,
                  price,
                  image,
                  brand,
                  discount,
                  description,
                  id,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus w-full"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
