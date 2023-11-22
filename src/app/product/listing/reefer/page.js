import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function ReeferAllProducts() {
  const getAllProducts = await productByCategory("reefer");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
