import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import Context from "../context/Context";
import { IconMenu2 } from '@tabler/icons-react';

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
      <div className=" d-flex justify-content-center w-100">
        <div className=" d-none d-sm-block ">
          <ul className="nav  ">
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
          </ul>
        </div>
        <div className="d-block d-sm-none  ">
          <div className=" d-flex justify-content-center align-items-center">
            <label for="mobile-nav">
              <IconMenu2 className="text-white d-block d-sm-none" />
            </label>
          </div>
          <input type="checkbox" id="mobile-nav" />
          <ul className="mobile-size p-3" >
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
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-sm-center">
          <Link className="nav-link" to={"./cart"}>
            <div className="position-relative">
              <IconShoppingCart />
              <span className="position-absolute cart-items">{quantity}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center me-3">
        <button className=" btn btn-success btn-sm" onClick={onLogout}>logout</button>
      </div>
    </div>
  );
};

export default Header;
