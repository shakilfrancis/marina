import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function FlatRackAllProducts() {
  const getAllProducts = await productByCategory("flat-rack");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
