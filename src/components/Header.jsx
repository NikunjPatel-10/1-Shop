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
  const [showMenu, setShowmenu] = useState(false);

  const quantity = cartItems.length;

  const onLogout = () => {
    localStorage.removeItem("auth");
    navigate("../login")
  }
  const menuBarHandler = () => {
    setShowmenu(true)
  }

  const menuHandler = () => {
    setShowmenu(false)
  }



  return (
    <div className="d-flex header w-100 position-relative">
      {/* for destop-veiw */}
      <div className=" d-none d-sm-block w-100">
        <ul className="nav  d-flex justify-content-center w-100">
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
            <Link className="nav-link" to={"/contact-us"}>
              Contact-us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/cart"}>
              <div className="position-relative">
                <IconShoppingCart />
                <span className="position-absolute cart-items">{quantity}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* for mobile-veiw */}
      <div className="d-block d-sm-none  w-100 ">
        <div className="d-flex align-items-center justify-content-between w-100 p-2">
          <div className=" d-flex justify-content-start align-items-center">
            <label htmlFor="mobile-nav" onClick={menuBarHandler} >
              <IconMenu2 className="text-white d-block d-sm-none" />
            </label>
          </div>
          <input type="checkbox" checked={showMenu} id="mobile-nav" readOnly />
          <div className="mobile-size m-auto shadow " onClick={menuHandler}>
            <div className="w-100   d-flex justify-content-center py-2">
              <ul className="list-style m-0">
                <li className="nav-item ">
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
                  <Link className="nav-link" to={"/contact-us"}>
                    Contact-us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-item mx-2">
            <Link className="nav-link" to={"/cart"}>
              <div className="position-relative">
                <IconShoppingCart color="white" />
                <span className="position-absolute cart-items">{quantity}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center me-sm-3 me-2">
        <button className=" btn btn-success btn-sm" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
