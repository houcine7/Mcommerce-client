import { CardHero } from "@/components/cardHero";
import { Cash } from "@/components/svg/Cash";
import { ShopIcon } from "@/components/svg/Shop";
import { TagIcon } from "@/components/svg/Tag";
import { UsersIcon } from "@/components/svg/Users";

export const OverviewCards = () => {
  return (
    <div className="px-24 flex items-center py-4 mt-4 justify-center gap-4 w-full">
      <CardHero
        title="Total Products"
        Icon={<ShopIcon />}
        count="7255"
        description="+100 products each hour"
      />
      <CardHero
        title="Total Users"
        Icon={<UsersIcon />}
        count="524"
        description="+30 users each day"
      />
      <CardHero
        title="Total sales"
        Icon={<Cash />}
        count="87595"
        description="+30 sale each minute"
      />
      <CardHero
        title="Total Categories"
        Icon={<TagIcon />}
        count="20"
        description="All categories available"
      />
    </div>
  );
};
