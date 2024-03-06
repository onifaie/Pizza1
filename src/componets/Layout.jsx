import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className=" container mx-auto">
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default Layout;
