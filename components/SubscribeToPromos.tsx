import Image from "next/image";

export const SubscribeToPromos = () => {
  return (
    <div className="flex justify-center">
      <div className="my-4 px-20 ">
        <h3 className="max-w-md font-bold text-gray-950 text-xl text-justify">
          Subscribe to news letter to be the first to get our exclusive offers{" "}
        </h3>
        <div className="flex justify-between items-center">
          <Image
            src={"/images/shoppinh.png"}
            alt="Subscription"
            width={400}
            height={400}
            objectFit="cover"
            objectPosition="center"
          />
          <div>test</div>
        </div>
      </div>
    </div>
  );
};
