import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 bg-slate-800">
      <ul className="flex gap-2">
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
