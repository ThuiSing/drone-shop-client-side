import React from "react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Images/logo.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logOutUser } = useAuth();
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="grid grid-cols-5 min-h-screen py-10 md:py-0 relative">
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
        className={`fixed top-0 w-2/3 sm:w-1/2 h-full bg-gray-100 shadow-md md:hidden  p-2 ${
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
        <div className="my-7">
          <Link to="/">
            <img width="200" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col mt-8">
              <NavLink
                to={`/dashboard`}
                className={(status) =>
                  `text-md px-5 py-3 ${
                    status.isActive
                      ? "bg-gray-800 text-white"
                      : "bg-transparent"
                  } `
                }
              >
                Pay
              </NavLink>
              <NavLink
                to={`/dashboard/my-orders`}
                className={(status) =>
                  `text-md px-5 py-3 ${
                    status.isActive
                      ? "bg-gray-800 text-white"
                      : "bg-transparent"
                  } `
                }
              >
                My Orders
              </NavLink>
              <NavLink
                to={`/dashboard/review`}
                className={(status) =>
                  `text-md px-5 py-3 ${
                    status.isActive
                      ? "bg-gray-800 text-white"
                      : "bg-transparent"
                  } `
                }
              >
                Review
              </NavLink>
            </div>
            <div className="mt-16">
              <button
                onClick={handleLogOut}
                className="w-full p-2 rounded font-medium border-2 border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-white w-64 hidden top-0 h-screen border-r-2 md:block ">
        <div className="px-4 pt-6">
          <Link to="/">
            <img width="250" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-5/6 ">
          <div className="flex flex-col mt-8">
            <NavLink
              to={`/dashboard`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-gray-800 text-white" : "bg-transparent"
                } `
              }
            >
              Pay
            </NavLink>
            <NavLink
              to={`/dashboard/my-orders`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-gray-800 text-white" : "bg-transparent"
                } `
              }
            >
              My Orders
            </NavLink>
            <NavLink
              to={`/dashboard/review`}
              className={(status) =>
                `text-md px-5 py-3 ${
                  status.isActive ? "bg-gray-800 text-white" : "bg-transparent"
                } `
              }
            >
              Review
            </NavLink>
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className="w-full p-3 rounded font-medium border-2 border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-span-5 md:ml-64 px-3 p-6"
        onClick={() => setShowNav(false)}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
