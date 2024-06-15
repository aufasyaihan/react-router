import { Link, useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../products";

export default function ProductDetail() {
  const params = useParams();
  const product = DUMMY_PRODUCTS.find((prod) => prod.id === params.productId);
  console.log(product);
  return (
    <>
      <h1 className="text-3xl">Product Detail</h1>
      <p className="my-5">{product.title}</p>
      <Link to=".." relative="path" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md">Back</Link>
      {/* ".." means it go back to previous page, and relative="path" means the react route checks if there's a path behind the current path and return to it, if not defined, it'll go back to the parent path */}
    </>
  );
}
