import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('products') // not recommended, use Link instead
  }
  return (
    <>
      <h1 className="text-3xl">Home Page</h1>
      <p>
        Go to <Link to={"products"} className="text-amber-400 underline underline-offset-2">Products Page</Link>
      </p>
      <button onClick={navigateHandler} className="px-4 py-2 bg-amber-500 mt-5 rounded-md hover:bg-amber-600">Products</button>
    </>
  );
}
