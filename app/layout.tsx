import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { CartContextProvider } from "@/context/cartProvider";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Cart } from "@/components/cart";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mcommerce - Home",
  description:
    "The Mcommerce home page the best e-commerce platform, for the best deals and products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
