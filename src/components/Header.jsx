import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import Context from "../context/Context";

const Header = () => {
  const { cartItems } = useContext(Context);
  const navigate = useNavigate()
  // const quantity = cartItems.length
  // localStorage.setItem("quantity", cartItems);

  const quantity = cartItems.length;

  const onLogout = () => {
    localStorage.removeItem("auth");
    navigate("../login")
  }

  return (
    <div className="d-flex header w-100">
      <ul className="nav justify-content-center  w-100">
        <li className="nav-item">
          <Link className="nav-link " to={"/home"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/men"}>
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/women"}>
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"./contact-us"}>
            Contact-us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"./cart"}>
            <div className="position-relative">
              <IconShoppingCart />
              <span className="position-absolute cart-items">{quantity}</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="d-flex justify-content-center align-items-center me-3">
        <button className=" btn btn-success btn-sm" onClick={onLogout}>logout</button>
      </div>
    </div>
  );
};

export default Header;
