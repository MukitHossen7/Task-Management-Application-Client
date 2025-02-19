import { Outlet } from "react-router-dom";
import Footer from "../components/Share/Footer/Footer";
import Navbar from "../components/Share/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
