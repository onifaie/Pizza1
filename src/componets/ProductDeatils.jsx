import React from "react";
import obeid from "../images/pizza1.jpg";

export default function ProductDeatils() {
  return (
    <div className="container mx-auto items-center justify-center">
      <div className="flex  grid-cols-3  gap-10 m-4  ">
        <div className="">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="ml-6 h-48 w-30 object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className=" w-60 rounded-lg  border-spacing-6 p-3  justify-items-stretch">
          Title : Title <br></br>
          <p className=" font-semibold text-blue-500"> Price $ 50 </p>
          Descrption : Descrption <br></br>
          <p className=" font-semibold text-red-500"> Option Chooes </p>
          <label>
            <input type="checkbox" value={false}></input>
            Hot
          </label>
          <label>
            <input type="checkbox" value={false}></input>
            Hot
          </label>
          <label>
            <input type="checkbox" value={false}></input>
            Hot
          </label>
          <p className=" font-semibold text-red-500">Size </p>
          <label>
            <input type="checkbox" value={false}></input>
            SMALL
          </label>
          <label>
            <input type="checkbox" value={false}></input>
            MUDIME
          </label>
          <label>
            <input type="checkbox" value={false}></input>
            LAGR
          </label>
          <br></br>
          <label>
            Quintity
            <input type="Number" defaultValue={1}></input>
          </label>
          <div className=" flex    grid-cols-2 gap-2 w-96">
            <button className="btn btn-red-500 shadow-2xl bg-green-500  rounded-lg text-white font-semibold  m-4  w-32">
              Add To Cart
            </button>
            <button className="btn btn-red-500 shadow-2xl bg-red-500  rounded-lg text-white font-semibold  m-4  w-32 ">
              Check Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
