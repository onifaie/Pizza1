import React from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "../../pages/Cart";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="text-black items-center text-center underline text-4xl my-4 font-semibold">
        {/* <h1> Our Servers </h1> */}
      </div>
      <div className="flex  grid-cols-3 justify-between gap-4  bg-black h-80 text-lg pt-10 px-4 ">
        <div className="text-cyan-50 ml-4">
          <li>create new Order </li>
          <li>cheak your Cart </li>
          <li>call us </li>
          <li>Profile </li>
          <li>DashBoard </li>
          <li>@2024 </li>
          <li>@Copy Rgiht </li>
        </div>
        <div className="text-cyan-50  ">
          <li>one </li>
          <li>one </li>
          <li>
            {" "}
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="order"
              exact
            >
              Your Cart
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="admin"
              exact
            >
              Admin
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="login"
              exact
            >
              Login
            </NavLink>
          </li>
          <li>one </li>
        </div>{" "}
        <div className=" text-cyan-50">
          <li>DashBoard </li>
          <li>our Projects </li>
          <li>your Cart </li>
          <Link to={Cart}> See you Cart </Link>
          <li>one </li>
          <li>one </li>
          <li>one </li>
          <li>one </li>
        </div>
      </div>
    </div>
  );
}
