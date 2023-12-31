"use client";
import { PaymentForm } from "@/components/paymentForm";
import { PaymentPageHeader } from "@/components/paymentHeader";
import { ProductItem } from "@/components/paymentProductItem";
import { Loader } from "@/components/svg/Loader";
import fetcher from "@/utils/fetcher";
import { useParams } from "next/navigation";
import useSWR from "swr";

const ORDERS_SERVICES_URL = `${process.env.NEXT_PUBLIC_ORDERS_SERVICE_URL}/orders`;

export default function PaymentPage() {
  const { orderId } = useParams();

  const { data, isLoading, error } = useSWR(
    `${ORDERS_SERVICES_URL}/${orderId}/full-object`,
    fetcher
  );

  if (isLoading)
    return (
      <div>
        <Loader />
        Loading...
      </div>
    );

  if (error) throw new Error(error);

  return (
    <div className="mt-20 px-8 pb-16">
      <PaymentPageHeader />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 ">
            <div className="max-h-[300px] overflow-y-auto">
              {data.products?.map((product: any) => (
                <ProductItem
                  key={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  quantity={product.quantity}
                />
              ))}
            </div>
            <hr />
            <div className="flex justify-between px-4 py-2">
              <p className="text-lg font-medium">Total</p>
              <p className="text-lg font-medium">{data.amount.toFixed(2)}</p>
            </div>
          </div>
          {/* Payment method */}
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          {/* Payment form */}
          <PaymentForm price={data.amount.toFixed(2)} />
        </div>
      </div>
    </div>
  );
}
