import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 text-amber-300">
      <ul className="flex gap-2 w-full justify-center">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
      </ul>
    </nav>
  );
}
