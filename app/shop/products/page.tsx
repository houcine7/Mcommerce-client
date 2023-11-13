import { ProductCard } from "@/components/prooductCard";
import { getProperDescription, getProperName } from "@/utils/strings";

const PRODUCT_SERVICE_URL = `${process.env.NEXT_PUBLIC_PRODUCTS_SERVICE_URL}/products`;

const getProducts = async () => {
  const res = await fetch(PRODUCT_SERVICE_URL, {
    // cache: "force-cache", // this the default behavior of next can be removed
    next: {
      revalidate: 3600, //revalidate the data every hour
    },
  });

  if (res.ok) {
    const products = await res.json();
    return products;
  }

  throw new Error("Failed to fetch products"); // this error will let next know that the data fetching
  //failed and will serve the data from the cache and will try to fetch the data again after the revalidate time
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="mt-16">
      <div className="px-36 py-8">
        <h1 className="font-bold text-4xl mb-4">Products for you</h1>
        <h1 className="text-3xl">Don't miss out the discounts</h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product: any) => (
          <ProductCard
            key={product?._id}
            title={getProperName(product?.title || "test")}
            price={product?.price}
            brand="brand test"
            image={product?.image}
            discount={product?.discount || 0}
            id={product?._id}
            description={getProperDescription(product?.description || "test")}
          />
        ))}
      </section>
    </div>
  );
}
