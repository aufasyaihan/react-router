import { NavLink } from "react-router-dom";

export default function NavBar() {
  const underline = (
    <span className="block h-0.5 bg-amber-300 max-w-0 group-hover:max-w-full transition-all duration-300 ease-in"></span>
  );
  return (
    <nav className="p-4 text-amber-300">
      <ul className="flex gap-2 w-full justify-center">
        <li>
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive ? "border-b-[2.5px] border-b-amber-300 pb-[2px]" : "group"
            }
            end // to tell that the link is ends with "/"
          >
            Home
            {underline}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"products"}
            className={({ isActive }) =>
              isActive ? "border-b-[2.5px] border-b-amber-300 pb-[2px]" : "group"
            }
          >
            Products {underline}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
