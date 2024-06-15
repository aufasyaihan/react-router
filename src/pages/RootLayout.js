import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <NavBar />
      <main className="p-3 w-full text-center">
        <Outlet />
      </main>
    </>
  );
}
