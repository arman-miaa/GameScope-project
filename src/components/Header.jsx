import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"; 
import { useTheme } from "../provider/ThemeProvider ";
import userIcon from "../assets/user-icon.jpg";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";




const Header = () => {
  const { users, logOutUser } = useContext(AuthContext);
const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const handleLogOutUser = () => {
    logOutUser();
    navigate('/');
   
       Swal.fire({
         position: "center",
         icon: "success",
         title: "Logged Out Successfully",
         showConfirmButton: false,
         timer: 1500,
       });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      {users && (
        <>
          <li>
            <NavLink to="/addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">My Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/gameWatchList">My WatchList</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar py-4 container text-[gray] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-semibold dropdown-content bg-[#1D1D1D] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a
          className={`text-xl  cursor-pointer ${
            theme === "dark" ? "hover:text-main" : "hover:text-black"
          }`}
        >
          GameScope
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 md:text-lg md:font-bold ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="mr-6 px-2 capitalize flex justify-center items-center gap-0 md:gap-2"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <MoonIcon className="h-6 w-6 md:h-8 md:w-8" />
          ) : (
            <SunIcon className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
          )}
        </button>

        {users?.email ? (
          <div className="flex items-center justify-center gap-4">
            <div>
              <img
                data-tooltip-id="my-tooltip"
                className="border-2 w-14 h-14 rounded-full cursor-pointer"
                src={users?.photoURL || userIcon} 
                alt="User Avatar"
                onError={(e) => (e.target.src = userIcon)} 
              />

              <Tooltip id="my-tooltip">
                <p className="">{users.displayName}</p>
              </Tooltip>
            </div>
            <p
              onClick={handleLogOutUser}
              className=" cursor-pointer p-2 text-sm md:text-xl rounded-md bg-[#ADFF00] text-black"
            >
              LogOut
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `p-2 md:px-4 text-sm md:text-xl rounded-md font-medium ${
                  isActive
                    ? "bg-lime-400 text-black shadow-lg transform scale-105"
                    : theme === "dark"
                    ? "border-lime-300 border-2 text-white hover:bg-lime-400 hover:text-black hover:shadow-md transition-all"
                    : "bg-black text-white hover:bg-gray-700 transition-all"
                }`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `p-2 md:px-4 text-sm md:text-xl rounded-md font-medium ${
                  isActive
                    ? "bg-lime-400 text-black shadow-lg transform scale-105"
                    : theme === "dark"
                    ? "border-lime-300 border-2 text-white hover:bg-lime-400 hover:text-black hover:shadow-md transition-all"
                    : "bg-black text-white hover:bg-gray-700 transition-all"
                }`
              }
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
