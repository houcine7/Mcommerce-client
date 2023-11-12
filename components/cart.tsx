"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";
import { Alert } from "./alert";
import { CarItem } from "./cartItem";
import { CartNav } from "./cartNav";
import { CartEmpty } from "./cartEmpty";

const ORDERS_SERVICES_URL = "http://localhost:3002/orders";

// Cart component
export const Cart = () => {
  const { isVisible, setIsVisible, cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    return () => {
      console.log("unmount");
      localStorage.removeItem("cart");
    };
  }, []);

  const saveOrder = async () => {
    const productsDto = cart.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
        unitPrice: item.price,
        discount: 0,
      };
    });

    const orderDto = {
      products: productsDto,
      createdAt: new Date(),
      amount: totalPrice,
    };

    try {
      const response = await fetch(ORDERS_SERVICES_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderDto),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setIsVisible(false);
      } else {
        console.log(data);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    isVisible && (
      <div className="fixed top-0 right-0 h-full w-[360px] bg-yellow-50 px-4 py-8 z-50">
        <CartNav setIsVisible={setIsVisible} />

        <div className="py-4 overflow-y-auto mt-8 ">
          {cart.length == 0 ? (
            <CartEmpty setIsVisible={setIsVisible} />
          ) : (
            <div className="w-full h-full">
              <div className=" flex flex-col space-y-4 max-h-80 overflow-y-auto">
                {cart.map((item: any) => (
                  <CarItem
                    id={item.id}
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    brand={"test brand"}
                    quantity={item.quantity}
                    picture={item.image}
                  />
                ))}
              </div>
              <div className=" rounded-t-2xl bg-yellow-500 h-full left-0 right-0 top-2/3 absolute bottom-0 py-8 px-10">
                <div className="flex justify-between text-lg px-4">
                  <p className="font-normal">Total price</p>
                  <p className=" text-white font-extrabold">{totalPrice}</p>
                </div>
                <div className="flex justify-between text-lg px-4 mt-4">
                  <p className="font-normal">Discount</p>
                  <p className=" text-white font-extrabold">0%</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg px-4 mt-4">
                  <p className="font-normal">To pay</p>
                  <p className=" text-white font-extrabold">{totalPrice}</p>
                </div>
                <Alert handleClick={saveOrder} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};
