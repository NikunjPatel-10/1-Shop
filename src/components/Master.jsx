import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const Master = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="h-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Master;
