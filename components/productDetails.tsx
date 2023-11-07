import { Input } from "./ui/input";

type ProductDetailsType = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
};

export const ProductDetails = ({
  name,
  description,
  price,
  quantity,
  img,
}: ProductDetailsType) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-center space-x-10 mt-28 mx-20 mb-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        className="w-[500px] h-auto mx-auto mb-4 shadow-sm rounded-md"
        alt={"test"}
      />
      <div>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full p-2 text-lg">
            <h4 className="text-xl font-bold">Price:</h4>
            <p className="text-gray-700">{price}</p>
          </div>
          <div className="w-full p-2 text-lg">
            <h4 className="text-xl font-bold">Quantity:</h4>
            <Input
              type="number"
              className="block w-full p-2 text-gray-900"
              value={quantity}
              // onChange={(e) => {}}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
