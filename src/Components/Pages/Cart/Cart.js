import React, { useState } from "react";
import useCart from "../../Hooks/useCart";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import PurchasePopUp from "./PurchasePopUp/PurchasePopUp";

const Cart = () => {
  const [cart, setCart] = useCart();
  const { user } = useAuth();
  const [popup, setPopup] = useState(false);
  const handleCross = (id) => {
    const existed = cart.filter((item) => item._id !== id);
    setCart(existed);
    const newCart = {
      addedCart: existed,
      email: user.email,
    };
    axios
      .put(`https://desolate-brushlands-67419.herokuapp.com/cart`, newCart)
      .then((res) => {
        console.log(res);
      });
    // console.log(id);
  };
  return (
    <div>
      <Navbar />
      <div className="py-12 mt-28 container mx-auto ">
        <h3 className="text-4xl font-medium mb-6">You Added on Cart : </h3>
        <div className="grid md:grid-cols-2 gap-5">
          {cart.length <= 0 ? (
            <h2 className="text-xl font-medium text-red-500">
              No item Added on cart .
              <Link to="explore">
                <span className="text-blue-800 hover:underline p-2 transition-all">
                  Add cart Now
                </span>
              </Link>
            </h2>
          ) : (
            cart.map((item, ind) => (
              <div key={ind} className="flex items-center">
                {console.log(item)}
                <img className="w-1/3" src={item.img} alt="" />
                <div className="flex items-center">
                  <div>
                    <h3 className="font-medium text-2xl">Name : {item.name}</h3>
                    <h3 className="font-medium">
                      Price : {item.price * item.quantity}
                    </h3>
                    <h3 className="font-medium"> Quantity : {item.quantity}</h3>
                  </div>
                  <div onClick={() => handleCross(item._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 bg-red-400 text-red-800 ml-3 cursor-pointer"
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
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-right">
          <button
            onClick={() => (popup ? setPopup(false) : setPopup(true))}
            className="text-white bg-gray-800 px-5 py-3 mt-10"
          >
            Order All Now
          </button>
        </div>
      </div>
      {popup && <PurchasePopUp setPopup={setPopup} />}
      <Footer />
    </div>
  );
};

export default Cart;
