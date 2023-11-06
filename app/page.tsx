import { OverviewCards } from "@/components/overviewCards";
import { SubscribeToPromos } from "@/components/subscribeToPromos";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="mt-16">
      <Hero />
      <OverviewCards />
      <SubscribeToPromos />
    </main>
  );
}
