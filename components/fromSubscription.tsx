import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const FormSubscription = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-1">
      <Input type="email" placeholder="Email" className="w-[400px]" />
      <Button
        type="submit"
        className="bg-pink-600 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
      >
        Subscribe
      </Button>
    </div>
  );
};
