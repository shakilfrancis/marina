import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function DryAllProducts() {
  const getAllProducts = await productByCategory("dry");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
