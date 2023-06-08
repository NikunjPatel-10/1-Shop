import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Master = () => {
  return (
    <div className="h-100 overflow-auto d-flex flex-column">
      <Header />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Master;
