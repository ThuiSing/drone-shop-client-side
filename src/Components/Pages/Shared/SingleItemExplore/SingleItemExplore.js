import React from "react";
import { Link } from "react-router-dom";

const SingleItemExplore = ({ drone }) => {
  const { name, img, description, price, _id } = drone;
  return (
    <div className="border-2 border-gray-500 p-3 rounded shadow-md">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="space-y-2">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <h4 className="text-xl font-bold">Price : ${price}</h4>
        <div>
          <Link to={`/purchase/${_id}`}>
            <button className="my-5 border-2 border-black font-medium px-3 py-2 hover:bg-gray-800 hover:text-white transition-all">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItemExplore;
