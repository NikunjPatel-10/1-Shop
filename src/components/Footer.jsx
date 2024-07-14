import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrapper d-flex justify-content-center align-items-center py-4">
      <div className="nav-wrapper d-flex flex-wrap justify-content-center w-100">
        <nav className="footer-nav">
          <ul className="d-flex flex-column ">
            <li className="nav-item">Main Menu</li>
            <li className="nav-item">Home</li>
            <li className="nav-item">Our Services</li>
            <li className="nav-item">Our Products</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Contact us</li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul className="d-flex flex-column ">
            <li className="nav-item">Company</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Team</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">Careers</li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul className="d-flex flex-column ">
            <li className="nav-item">Useful Links</li>
            <li className="nav-item">Site map</li>
            <li className="nav-item">Search</li>
            <li className="nav-item">Advanced Search</li>
            <li className="nav-item">Supplier</li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul className="d-flex flex-column ">
            <li className="nav-item">Get in touch</li>
            <li className="nav-item">(89) 982-278 356</li>
            <li className="nav-item">1shop@gmail.com</li>
            <li className="nav-item">67/A , Colorlib, Green Road, NYC</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
