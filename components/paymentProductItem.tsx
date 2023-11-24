export const ProductItem = ({
  title,
  price,
  image,
  quantity,
}: {
  title: string;
  price: number;
  image: string;
  quantity: number;
}) => {
  return (
    <div className="flex   items-center rounded-lg bg-white sm:flex-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-20 w-20 rounded-md border object-cover object-center"
        src={image}
        alt="product item"
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{title}</span>
        <span className="float-right text-gray-400">feature: 14</span>
        <span className="float-right text-gray-400">
          Ordered quantity: {quantity}
        </span>
        <p className="mt-auto text-lg font-bold">
          {(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
