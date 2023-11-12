import { PaymentForm } from "@/components/paymentForm";
import { PaymentPageHeader } from "@/components/paymentHeader";

export default function PaymentPage() {
  return (
    <div className="mt-20 px-8">
      <PaymentPageHeader />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {/* Order items */}
          </div>
          {/* Payment method */}
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          {/* Payment form */}
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
