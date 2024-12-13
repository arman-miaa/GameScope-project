import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
      <div>
        <div className="bg-[#2647dc6f">
        
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