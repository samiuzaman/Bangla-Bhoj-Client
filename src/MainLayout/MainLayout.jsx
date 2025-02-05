import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="font-Poppins">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-420px)] dark:bg-metal-800">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
