import Image from "next/image";
import { FormSubscription } from "./fromSubscription";

export const SubscribeToPromos = () => {
  return (
    <div className="flex justify-center mx-16 pb-4 border-t mt-8">
      <div className="my-4 px-20 w-full">
        <div className="flex justify-center gap-40 items-center mt-4 w-full">
          <Image
            className="rounded border-2 border-gray-200 shadow-md"
            src={"/images/shoppinh.png"}
            alt="Subscription"
            width={400}
            height={300}
            objectFit="cover"
            objectPosition="center"
          />
          <div>
            <h3 className="max-w-md font-bold text-gray-950 text-2xl  text-justify relative mb-10">
              Subscribe to news letter to be the first to get our exclusive
              offers{" "}
              <span className="border-2 w-16 h-1 border-pink-600 inline-block absolute left-0 top-7"></span>
            </h3>
            <FormSubscription />
            <p className="text-gray-950 text-sm mt-4">
              By subscribing to our newsletter you agree to our{" "}
              <span className="text-pink-600">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
