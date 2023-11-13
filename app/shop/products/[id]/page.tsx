"use client";
import { ProductDetails } from "@/components/productDetails";
import { Loader } from "@/components/svg/Loader";
import { usePathname } from "next/navigation";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const PRODUCT_SERVICE_URL = `${process.env.NEXT_PUBLIC_PRODUCTS_SERVICE_URL}/products`;

export default function ProductDetailsPage() {
  const path = usePathname();
  const productId = path.split("/")[3];

  const { data, isLoading, error } = useSWR(
    `${PRODUCT_SERVICE_URL}/${productId}`,
    {
      fetcher,
    }
  );

  if (error) {
    throw new Error("Couldn't fetch resource");
  }

  return isLoading ? (
    <div className="mt-28 flex justify-center">
      <Loader />
    </div>
  ) : (
    <>
      <ProductDetails
        img={data?.image}
        name={data?.title}
        id={data?._id}
        description={data?.description}
        price={data?.price}
        quantity={data?.quantity}
      />
    </>
  );
}
