import Image from "next/image";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="hero flex justify-center px-4 pt-8 relative">
      <Image
        src="/images/test1.jpg"
        alt="Hero"
        className="object-cover object-center shadow-lg shadow-yellow-500"
        objectFit="cover"
        objectPosition="center"
        width={1000}
        height={500}
        priority
      />
      <div className="absolute right-[20%] top-32">
        <h1 className="text-white text-4xl font-bold max-w-md leading-normal">
          Shop <span className="text-blue-500">Smart</span>, <br />
          Shop
          <span className="text-violet-500 relative"> Simple</span>, <br />
          Shop with <span className="text-orange-500">Mcommerce</span> <br />
          by Kata!
        </h1>
        <div className="flex justify-start gap-4 mt-4">
          <Button className="bg-pink-500 hover:bg-pink-600" about="shop now">
            Shop Now
          </Button>
          <Button variant={"outline"} className="bg-none">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
