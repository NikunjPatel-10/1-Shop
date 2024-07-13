import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import Context from "../context/Context";
import { IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  const { cartItems } = useContext(Context);
  const navigate = useNavigate();
  // const quantity = cartItems.length
  // localStorage.setItem("quantity", cartItems);
  // const [showMenu, setShowmenu] = useState(false);
  const { isHeader, setIsHeader } = useContext(Context);

  // useEffect(() => {
  //   setShowmenu(isHeader)
  // }, [isHeader])

  const quantity = cartItems.length;

  const onLogout = () => {
    localStorage.removeItem("auth");
    navigate("../login");
  };
  const menuBarHandler = () => {
    // setShowmenu(true);
    setIsHeader(true);
  };

  const menuHandler = () => {
    setIsHeader(false);
    // setShowmenu(false)
  };

  return (
    <div className="d-flex header w-100 position-relative py-2 ">
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
            <label htmlFor="mobile-nav" onClick={menuBarHandler}>
              <IconMenu2 className=" d-block d-sm-none " />
            </label>
          </div>
          <input type="checkbox" checked={isHeader} id="mobile-nav" readOnly />
          <div className="mobile-size m-auto shadow " >
            <div className="w-100">
              <div className="close-icon">
                {" "}
                <IconX onClick={menuHandler}  />
              </div>
              <ul className="list-style m-0">
                <li className="nav-item">
                  <NavLink className="nav-link " to={"/home"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/men"}>
                    Men
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/women"}>
                    Women
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/contact-us"}>
                    Contact-us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-item mx-2">
            <Link className="nav-link" to={"/cart"}>
              <div className="position-relative">
                <IconShoppingCart />
                <span className="position-absolute cart-items">{quantity}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center me-sm-3 me-2">
        <button className=" btn logout-btn btn-sm" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
