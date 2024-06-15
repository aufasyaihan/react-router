import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl">Home Page</h1>
      <p>
        Go to <Link to={"/products"} className="text-amber-400 underline underline-offset-2">Products Page</Link>
      </p>
    </>
  );
}
