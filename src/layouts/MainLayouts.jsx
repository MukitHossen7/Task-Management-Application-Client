import { Outlet } from "react-router-dom";
import Footer from "../components/Share/Footer/Footer";
import Navbar from "../components/Share/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
