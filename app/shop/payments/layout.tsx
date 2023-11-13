import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isCartVisible={false} />
      {children}
      <Toaster />
    </>
  );
}
