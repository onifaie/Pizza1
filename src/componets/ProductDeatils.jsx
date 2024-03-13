import React from "react";
import obeid from "../images/pizza1.jpg";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproduct } from "../Redux/Slices/Slice.jsx";
import { getPizzaItem } from "../utilti/api.js";

const productDetails = () => {
  const [product, setproduct] = useState();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [auantity, setQuantitiy] = useState(1);
  const [extra, Setextra] = useState([]);
  const [price, SetPrice] = useState();
  const [size, SetZise] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const pizzaItem = await getPizzaItem({ id: productId });
      setproduct(pizzaItem);
      SetPrice(pizzaItem?.prices[0]);
      console.log(pizzaItem);
      setIsLoading(false);
    };
    getProduct();
  }, [productId]);

  if (isLoading) return null;

  return (
    <div className=" container">
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="  rounded-lg">
          <Link
            to={`/productDetails/${product._id.toString()}`}
            key={product._id}
          >
            <img
              src={product.img}
              alt="test"
              height={150}
              width={150}
              className=" mb-6"
            />
          </Link>
        </div>
        <div className=" w-full">
          <p className=" font-semibold text-3xl">{product.title}</p>
          <p className=" font-semibold text-red-500">{product.desc}</p>
          <p className=" font-semibold text-red-500">${product.prices[0]}</p>
          <p className=" font-semibold text-red-500">
            {/* {product.createdAt.toLocaleTimeString()} */}
          </p>

          {/* <p className=" font-semibold text-red-500">{product.createdAt}</p> */}

          {/* <hr className=" font-semibold text-red-500 text-4xl"></hr> */}
        </div>

        <div>
          <h1 className=" font-medium text-blue-500 underline mb-3">
            {" "}
            chooes the Extra{" "}
          </h1>
          <div className=" flex grid-cols-4 items-center mb-1">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Cheease
            </label>
          </div>
          <div className=" flex grid-cols-4 items-center mb-1">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hot
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Kitchap
            </label>
          </div>{" "}
        </div>
        <div>
          <h1 className="font-medium text-blue-500 underline mb-3">
            {" "}
            chooes the size{" "}
          </h1>

          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mudime
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Small
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Big
            </label>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add to Cart
      </button>
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Go To Home
      </button>
    </div>
  );
};
export default productDetails;
