import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import useScrollToSection from "../components/useScrollToSection";


const MainLayout = () => {
  // useScrollToSection();
    return (
      <div>
        <div  className="sticky top-0 left-0 z-40 bg-[var(--footer-color)]">
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