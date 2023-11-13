export const ProductItem = ({
  title,
  price,
  image,
}: {
  title: string;
  price: number;
  image: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={image}
        alt="product item"
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{title}</span>
        <span className="float-right text-gray-400">feature: 14</span>
        <p className="mt-auto text-lg font-bold">{price}</p>
      </div>
    </div>
  );
};
