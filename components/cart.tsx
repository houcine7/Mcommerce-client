"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { Button } from "./ui/button";
export const Cart = () => {
  
  const { isVisible, setIsVisible, cart } = useContext(CartContext);
  console.log("THIS IS THE CART from cart component", cart);

  return (
    isVisible && (
      <div className="fixed top-0 right-0 h-full w-[360px] bg-yellow-50 px-4 py-8 z-50">
        <CartHeader setIsVisible={setIsVisible} />
        <div className="py-4 overflow-y-auto mt-8 ">
          {cart.length == 0 ? (
            <CartEmpty setIsVisible={setIsVisible} />
          ) : (
            <div className="w-full h-full">
              <div className=" flex flex-col space-y-4 max-h-80 overflow-y-auto">
                {cart.map((item: any) => (
                  <CarItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                    quantity={1}
                    picture={item.image}
                  />
                ))}
              </div>
              <div className=" rounded-t-2xl bg-yellow-500 h-full left-0 right-0 top-2/3 absolute bottom-0 py-8 px-10">
                <div className="flex justify-between text-lg px-4">
                  <p className="font-normal">Total price</p>
                  <p className=" text-white font-extrabold">1000</p>
                </div>
                <div className="flex justify-between text-lg px-4 mt-4">
                  <p className="font-normal">Discount</p>
                  <p className=" text-white font-extrabold">10%</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg px-4 mt-4">
                  <p className="font-normal">To pay</p>
                  <p className=" text-white font-extrabold">900</p>
                </div>
                <Button className="bg-pink-600 hover:bg-pink-400 w-full mt-4">
                  Create Order
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

const CarItem = ({
  name,
  picture,
  price,
  brand,
  quantity,
}: {
  name: string;
  price: number;
  brand: string;
  quantity: number;
  picture: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt={name}
          className="rounded-full w-11 h-11 object-cover object-center"
        />
        <div className="flex flex-col justify-center text-sm">
          <p className="font-light">Name</p>
          <p className="font-bold">Brand</p>
        </div>
      </div>

      <div>
        <p className="text-bold text-lg">Price</p>
      </div>
      <div className="flex items-center">
        <Button variant={"outline"} className="w-8 h-8 font-extrabold">
          +
        </Button>
        <p className="mx-2">{22}</p>
        <Button variant={"outline"} className="w-8 h-8 font-extrabold">
          -
        </Button>
      </div>
    </div>
  );
};

const CartHeader = ({
  setIsVisible,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeCart = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex justify-between items-center rounded-md border-yellow-400 border-[0.5px] p-1 px-4">
      <button className="font-bold text-red-600 text-lg" onClick={closeCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
      <h1 className="font-bold text-lg">Cart</h1>
      <div className="font-bold text-lg">0</div>
    </div>
  );
};

const CartEmpty = ({
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
