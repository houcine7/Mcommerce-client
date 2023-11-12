import { Cart } from "@/components/cart";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { CartContextProvider } from "@/context/cartProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CartContextProvider>
        <Header isCartVisible={true} />
        <Cart />
        {children}
      </CartContextProvider>
      <Toaster />
    </>
  );
}
