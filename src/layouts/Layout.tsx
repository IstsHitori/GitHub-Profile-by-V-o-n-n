import { Outlet } from "react-router-dom";
import Header from "../components/Header";



const Layout = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-[#20293A] min-h-full md:px-10 p-2 px-5">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
