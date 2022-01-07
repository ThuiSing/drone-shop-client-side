import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const PurchasePopUp = ({ setPopup }) => {
  const { user } = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = new Date();

  const onSubmit = (data) => {
    const newCart = cart.map((element) => {
      element.email = user.email;
      element.status = "pending";
      element.address = data.address;
      element.address = data.address;
      element.number = data.number;
      element.date = date.toLocaleDateString();
      delete element._id;
      return element;
    });
    axios
      .post("https://desolate-brushlands-67419.herokuapp.com/orders", newCart)
      .then((res) => {
        if (res.data.insertedCount > 0) {
          alert("ordered successfully.please pay now");
          axios
            .delete(
              `https://desolate-brushlands-67419.herokuapp.com/cart/${user.email}`
            )
            .then((res) => {
              if (res.data.deletedCount > 0) {
                setCart([]);
                navigate("/dashboard/my-orders");
              }
            });
        }
      });
  };
  return (
    <div className="absolute w-full h-screen bg-primary  top-0 left-0 z-50 flex justify-center items-center">
      <div className="bg-white w-1/2 p-6 relative">
        <span
          onClick={() => setPopup(false)}
          className="absolute top-2 right-3 bg-red-300 rounded hover:text-red-700 bg-red-100"
        >
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
        </span>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-4">
          <div>
            <label className="text-xl " htmlFor="name">
              Name
            </label>
            <input
              className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
              id="name"
              defaultValue={user.displayName}
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="text-xl " htmlFor="email">
              Email
            </label>
            <fieldset disabled>
              <input
                type="email"
                className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none bg-gray-300"
                id="name"
                defaultValue={user.email}
                {...register("email", { required: true })}
                //   disabled
              />
            </fieldset>
          </div>
          <div>
            <label className="text-xl " htmlFor="number">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
              id="number"
              {...register("number")}
              placeholder="Enter Your Number"
            />
          </div>
          <div>
            <label className="text-xl " htmlFor="address">
              Address
            </label>
            <input
              className="w-full mt-1 p-3 border-2 border-gray-400 rounded outline-none"
              id="address"
              placeholder="Enter Your Address"
              {...register("address", { required: true })}
            />
            <span className="text-red-600 font-medium ">
              {errors.address && "Address is Required"}
            </span>
          </div>
          <input
            className=" bg-gray-800 text-white px-8 py-3 rounded inline-block"
            type="submit"
            value="Purchase"
          />
        </form>
      </div>
    </div>
  );
};

export default PurchasePopUp;
