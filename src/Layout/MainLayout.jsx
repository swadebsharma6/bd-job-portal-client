import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Navbar/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default MainLayout;
