import { ProductDetails } from "@/components/productDetails";

export default function ProductDetailsPage() {
  return (
    <ProductDetails
      img="/images/shoppinh.png"
      name="Shopping"
      description="Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them."
      price={100}
      quantity={1}
    />
  );
}
