import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8 px-3 md:px-0">
      <div className="container mx-auto md:grid grid-cols-4 gap-8 pt-16">
        <div>
          <Link to="/">
            <img width="250" src={logo} alt="logo" />
          </Link>
          <h4 className="my-4 text-md text-yellow-300 font-medium mt-8">
            Call Us :
            <a className="text-white ml-2" href="tel:017-8882-1777">
              017 8882 11777
            </a>
          </h4>
          <h5 className="text-gray-300">
            Address: No 40 Bari Street 133/ Newyork City,ny United states
          </h5>
        </div>
        <div>
          <h3 className="text-3xl font-semibold uppercase">Products</h3>
          <div className="mt-5">
            <Link to="/">
              <h4>About us</h4>
            </Link>
            <Link to="/">
              <h4 className="my-3">All Drones</h4>
            </Link>
            <Link to="/">
              <h4>About us</h4>
            </Link>
            <Link to="/">
              <h4 className="my-3">Best Sales</h4>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold uppercase ">Our Company</h3>
          <div className="mt-5">
            <Link to="/">
              <h4>Delivery</h4>
            </Link>
            <Link to="/">
              <h4 className="my-3">Contact Us</h4>
            </Link>
            <Link to="/">
              <h4>About us</h4>
            </Link>
            <Link to="/">
              <h4 className="my-3">About us</h4>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold ">My Account</h3>
          <div className="mt-5">
            <Link to="/">
              <h4>Dashboard</h4>
            </Link>
            <Link to="/">
              <h4 className="my-3">My Orders</h4>
            </Link>
            <Link to="/">
              <h4>Review</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t-2 text-center ">
        <div className="flex flex-col md:block  pt-8">
          <span className="border-r pr-6  text-xl">FAQ</span>
          <span className="mx-4 border-r pr-6 text-xl">Orders & Return</span>
          <span className="border-r pr-6 text-xl">Shipping & Policy</span>
          <span className="mx-4 border-r pr-6 text-xl">Contact US</span>
        </div>
        <h4 className="mt-6">&copy; {Year} - All Right Reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
