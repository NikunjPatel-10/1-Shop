import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrapper d-flex justify-content-center p-2">
      <div className="d-flex justify-content-center nav-wrapper">
        <nav>
          <ul className="d-flex flex-column ">
            <li className="nav-item">Main Menu</li>
            <li className="nav-item">Home</li>
            <li className="nav-item"> Our Services</li>
            <li className="nav-item">Our Products</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Contact us</li>
          </ul>
        </nav>
        <nav>
          <ul className="d-flex flex-column ">
            <li className="nav-item">Company</li>
            <li className="nav-item">About </li>
            <li className="nav-item">Team</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">Careers</li>
          </ul>
        </nav>
        <nav>
          <ul className="d-flex flex-column ">
            <li className="nav-item">Useful Links</li>
            <li className="nav-item">site map</li>
            <li className="nav-item">search </li>
            <li className="nav-item">Advanced Search</li>
            <li className="nav-item">Supplier</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
