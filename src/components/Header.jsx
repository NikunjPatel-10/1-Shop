import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="nav justify-content-center header ">
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
  );
};

export default Header;
