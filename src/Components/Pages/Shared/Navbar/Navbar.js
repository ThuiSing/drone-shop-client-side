import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import userIcon from "../../../Images/icons/user.png";
import logo from "../../../Images/logo.png";

const Navbar = () => {
  const { user, logOutUser, isAdmin } = useAuth();
  // console.log(isAdmin);
  const location = useLocation();
  const [openUserNav, setOpenUserNav] = useState(false);
  const [showBgOnScroll, setShowBgOnScroll] = useState(false);
  // console.log(location.pathname);
  // console.log(user);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
      setShowBgOnScroll(true);
    } else {
      setShowBgOnScroll(false);
    }
  });

  const handleToogle = () => {
    openUserNav ? setOpenUserNav(false) : setOpenUserNav(true);
  };
  return (
    <header
      className={`md:fixed top-0  w-full z-50  ${
        location.pathname === "/" ? "bg-transparent" : "bg-white"
      } ${showBgOnScroll && "bg-white transition-all shadow-md"}`}
    >
      <div className="container relative mx-auto flex justify-between items-center ">
        <div>
          <Link to="/">
            <img width="250" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-end items-center  md:w-2/3">
          <div className="mr-8 hidden md:block">
            <NavLink
              exact
              activeClassName="font-bold text-gray-900"
              to="/"
              className={`px-4 font-medium  text-gray-800`}
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="font-bold  text-gray-900"
              to="/explore"
              className="px-4 font-medium text-gray-800"
            >
              Explore
            </NavLink>
            <NavLink
              activeClassName="font-bold text-gray-900"
              to="/about-us"
              className="px-4 font-medium text-gray-800"
            >
              About us
            </NavLink>
            {user.email && (
              <NavLink
                activeClassName="font-bold text-gray-900"
                to="/dashboard"
                className="px-4 font-medium text-gray-800"
              >
                Dashboard
              </NavLink>
            )}
            {user.email && isAdmin && (
              <NavLink
                activeClassName="font-bold text-gray-900"
                to="/admin-dashboard"
                className="px-4 font-medium text-gray-800"
              >
                Admin Dashboard
              </NavLink>
            )}
          </div>
          <div className="flex items-center">
            {user.email && (
              <div className="mr-3">
                <img
                  width="45"
                  className="rounded-full"
                  src={user.photoURL ? user.photoURL : userIcon}
                  alt=""
                />
              </div>
            )}

            {user.email ? (
              <div className="cursor-pointer" onClick={handleToogle}>
                {handleToogle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            ) : (
              //
              <Link to="/login">
                <button className="px-8 py-3 rounded bg-gray-800 font-medium text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
          {openUserNav && user.email && (
            <div className="bg-gray-50 w-64 right-0 absolute top-full z-10 text-center py-5 shadow-md">
              <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              <div className="block md:hidden flex flex-col space-y-5 mt-5">
                <NavLink
                  exact
                  activeClassName="font-bold text-gray-900"
                  to="/"
                  className="px-4 font-medium  text-gray-600"
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName="font-bold text-gray-900"
                  to="/explore"
                  className="px-4 font-medium text-gray-600"
                >
                  Explore
                </NavLink>
                <NavLink
                  activeClassName="font-bold text-gray-900"
                  to="/contact-us"
                  className="px-4 font-medium text-gray-600"
                >
                  Contact us
                </NavLink>
                {user.email && (
                  <NavLink
                    activeClassName="font-bold text-gray-900"
                    to="/dashboard"
                    className="px-4 font-medium text-gray-600"
                  >
                    Dashboard
                  </NavLink>
                )}
                {user.email && isAdmin && (
                  <NavLink
                    activeClassName="font-bold text-gray-900"
                    to="/admin-dashboard"
                    className="px-4 font-medium text-gray-600"
                  >
                    Admin Dashboard
                  </NavLink>
                )}
              </div>
              <button
                onClick={logOutUser}
                className="px-7 py-2 rounded bg-gray-800 font-medium text-white mt-5"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
