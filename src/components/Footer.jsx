import React from "react";

const Footer = () => {
  return (
    <footer class="footer-wrapper d-flex justify-content-center p-2">
      <div class="d-flex justify-content-center nav-wrapper">
        <nav>
          <ul class="d-flex flex-column mb-0">
            <li class="nav-item">Main Menu</li>
            <li class="nav-item">Home</li>
            <li class="nav-item"> Our Services</li>
            <li class="nav-item">Our Products</li>
            <li class="nav-item">About us</li>
            <li class="nav-item">Contact us</li>
          </ul>
        </nav>
        <nav>
          <ul class="d-flex flex-column mb-0">
            <li class="nav-item">Company</li>
            <li class="nav-item">About </li>
            <li class="nav-item">Team</li>
            <li class="nav-item">Blog</li>
            <li class="nav-item">Careers</li>
          </ul>
        </nav>
        <nav>
          <ul class="d-flex flex-column mb-0">
            <li class="nav-item">Useful Links</li>
            <li class="nav-item">site map</li>
            <li class="nav-item">search </li>
            <li class="nav-item">Advanced Search</li>
            <li class="nav-item">Supplier</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
