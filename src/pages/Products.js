import { Link } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../products";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl">Product Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
