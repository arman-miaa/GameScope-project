import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
      <div>
        <div className="sticky top-0 left-0 z-40 bg-white">
          <Header></Header>
        </div>
        <div className="min-h-[calc(100vh-290px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;