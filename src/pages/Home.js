import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl">Home Page</h1>
      <p>
        Go to <Link to={"/products"}>Products Page</Link>
      </p>
    </>
  );
}
