import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function OpenTopAllProducts() {
  const getAllProducts = await productByCategory("openTop");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
