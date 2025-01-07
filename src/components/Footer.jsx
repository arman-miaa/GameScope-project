import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useTheme } from "../provider/ThemeProvider ";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="mt-12">
      <footer className="footer">
        <div className="container mx-auto footer text-base-content p-10">
          {/* Left Section */}
          <nav className="mx-auto lg:mx-0">
            <aside>
              <img
                className="w-16 h-16 rounded-full object-cover mx-auto"
                src="/fav-icon.jpg"
                alt=""
              />
              <h2 className="text-lg md:text-2xl">GameScope</h2>
              <p className="font-semibold">
                Explore, review, and manage <br /> your favorite games
              </p>
            </aside>
          </nav>

          {/* Center  */}
          <nav className="mx-auto lg:mx-0 py-4 md:py-0">
            <h6 className="text-xl text-[var(--highlight)]">Explore</h6>
            <a href="/#home" className="link link-hover">
              Home
            </a>
          

            <Link to="/allReviews" className="link link-hover">
              All Reviews
            </Link>

            <Link to="/aboutUs" className="link link-hover">
              About Us
            </Link>
            <Link to="/signup" className="link link-hover">
              Register
            </Link>
           
          </nav>

          <div className="mx-auto lg:mx-0">
            <h6 className="text-xl text-[var(--highlight)]">Follow US</h6>
            <div className="flex space-x-4 my-2">
              <Link
                to="https://www.facebook.com/arman3655/"
                target="_blank"
                className="text-blue-500 md:text-2xl hover:text-blue-700"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </Link>
              <Link
                to="https://x.com/MdArman02574967"
                target="_blank"
                className="text-blue-400 md:text-2xl hover:text-blue-600"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/arman-mia-am/"
                target="_blank"
                className="text-blue-300 md:text-2xl hover:text-blue-500"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="footer flex justify-center bg-[#414141ad] py-4 text-center text-main">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Arman Mia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
