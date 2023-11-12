import { OverviewCards } from "@/components/overviewCards";
import { SubscribeToPromos } from "@/components/subscribeToPromos";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="mt-16">
      <Header isCartVisible={false} />
      <Hero />
      <OverviewCards />
      <SubscribeToPromos />
    </main>
  );
}
