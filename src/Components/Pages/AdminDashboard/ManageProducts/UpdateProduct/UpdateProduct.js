import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      60,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const dataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://desolate-brushlands-67419.herokuapp.com/drones/${id}`)
      .then((res) => setProduct(res.data));
  }, [id, product]);
  const onSubmit = async (data) => {
    const file = data.img[0];
    const image = await resizeFile(file);
    const newFile = dataURIToBlob(image);
    // console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("img", newFile);
    axios
      .put(
        `https://desolate-brushlands-67419.herokuapp.com/drones/${id}`,
        formData
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          alert("changed successfully");
        }
      });
  };
  return (
    <div>
      <div className="flex  items-center mb-6">
        <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-5 cursor-pointer hover:text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>

        <h2 className="text-3xl font-medium ">Update Your Product</h2>
      </div>
      <div className="flex flex-col md:flex-row  justify-between">
        <div className="md:w-1/2">
          <img
            src={`data:image/jpeg;base64,${product.img}`}
            alt={product.name}
          />
          <div className="mt-4">
            <h4 className="text-3xl font-medium">{product.name}</h4>
            <h4 className="font-medium my-2">Price : ${product.price}</h4>
            <h4>{product.description}</h4>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-medium mb-10">Enter Update Value Here</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.name}
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <input
                type="file"
                className="w-full bg-white p-3"
                defaultValue={product.img}
                {...register("img", { required: true })}
                placeholder="changed image url"
              />
            </div>
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.price}
                {...register("price", { required: true })}
                placeholder="Enter price here"
              />
            </div>
            <div>
              <input
                className="w-full p-3"
                defaultValue={product.description}
                {...register("description", { required: true })}
                placeholder="Enter Description here"
              />
            </div>

            <input
              className="px-6 py-2 bg-gray-800 text-white cursor-pointer hover:text-gray-800 hover:bg-white transition-all"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
