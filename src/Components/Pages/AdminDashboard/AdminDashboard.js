import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/logo.png";

const AdminDashboard = () => {
  const { logOutUser } = useAuth();
  const [showNav, setShowNav] = useState(false);

  const navigation = useNavigate();

  const handleLogOut = () => {
    logOutUser();
    navigation("/");
  };
  return (
    <div className="flex min-h-screen relative bg-gray-100 py-12">
      <div onClick={() => setShowNav(true)} className="absolute left-3 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24 "
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div
        className={`fixed top-0 w-2/3 sm:w-1/2 h-screen bg-gray-800 text-white shadow-md md:hidden  p-2 ${
          showNav ? "block" : "hidden"
        }`}
      >
        <div>
          <svg
            onClick={() => setShowNav(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-auto cursor-pointer"
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
        </div>
        <div className="p-5 mt-5">
          <Link to="/">
            <img width="200" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-5/6 ">
          <div className="flex flex-col mt-8">
            <NavLink
              to="/admin-dashboard"
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Manage All Orders
            </NavLink>
            <NavLink
              to={`/admin-dashboard/add-product`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Add A Product
            </NavLink>
            <NavLink
              to={`/admin-dashboard/make-admin`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Make Admin
            </NavLink>
            <NavLink
              to={`/admin-dashboard/manage-products`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Manage Products
            </NavLink>
          </div>
          <div className="px-5">
            <button
              onClick={handleLogOut}
              className="px-7 py-2 font-medium border-2 border-white font-medium hover:bg-white hover:text-gray-800 transition-all"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className=" fixed -inset-1 bg-gray-800 text-white w-64 hidden md:block">
        <div className="p-5 mt-5">
          <Link to="/">
            <img width="200" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col mt-8">
            <NavLink
              to="/admin-dashboard"
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Manage All Orders
            </NavLink>
            <NavLink
              to={`/admin-dashboard/add-product`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Add A Product
            </NavLink>
            <NavLink
              to={`/admin-dashboard/make-admin`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Make Admin
            </NavLink>
            <NavLink
              to={`/admin-dashboard/manage-products`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-white text-black" : "bg-transparent"
                } `
              }
            >
              Manage Products
            </NavLink>
          </div>
          <div className="px-5">
            <button
              onClick={handleLogOut}
              className="px-7 py-2 font-medium border-2 border-white font-medium hover:bg-white hover:text-gray-800 transition-all"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowNav(false)}
        className="overflow-hidden flex-1 md:ml-60 p-5"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
