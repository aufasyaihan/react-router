import { useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../products";

export default function ProductDetail() {
  const params = useParams();
  const product = DUMMY_PRODUCTS.find((prod) => prod.id === params.productId);
  console.log(product);
  return (
    <>
      <h1 className="text-3xl">Product Detail</h1>
      <p className="mt-5">{product.title}</p>
    </>
  );
}
