import Image from "next/image";
import { CartHeader } from "./cartHeaderIcon";

export const Header = ({ isCartVisible }: { isCartVisible: boolean }) => {
  return (
    <header className="header w-full fi p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between itesm-cecnter w-full px-8 py-2 border-b-white border-b-[thin] shadow-lg bg-transparent ">
        <div className="flex items-center ">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-2xl font-bold ml-4">Mcommerece</h1>
        </div>
        <div className="flex justify-center gap-4">
          <ul className="flex items-center gap-4">
            <li>Men's</li>
            <li>Women</li>
            <li>Electronics</li>
            {isCartVisible && <CartHeader />}
          </ul>
        </div>
      </div>
    </header>
  );
};
