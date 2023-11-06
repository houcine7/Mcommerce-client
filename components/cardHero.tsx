import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type CardsHeroProps = {
  title: string;
  Icon: JSX.Element;
  description: string;
  count: string;
};

export const CardHero = ({
  title,
  Icon,
  description,
  count,
}: CardsHeroProps) => {
  return (
    <Card className="w-full hover:shadow-2xl transition ease-linear duration-200 ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
