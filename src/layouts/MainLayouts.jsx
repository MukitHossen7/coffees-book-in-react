import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";
const MainLayouts = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="min-h-[calc(100vh-228px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
