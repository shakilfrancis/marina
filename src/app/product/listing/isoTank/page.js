import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function IsoTankTopAllProducts() {
  const getAllProducts = await productByCategory("iso-tank");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
