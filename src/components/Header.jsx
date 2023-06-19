import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import useCartData from "../hooks/useCartData";

const Header = () => {
  const getCartData = useCartData();

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setCartItem(getCartData.length);
  }, [getCartData]);

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
              <span className="position-absolute cart-items">{cartItem}</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
