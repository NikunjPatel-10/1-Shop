import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import ContextProvider from "../context/contextProvider";

const Master = () => {
  return (
    <ContextProvider>
      <div className="h-100  d-flex flex-column  overflow-auto">
        <div className="position-sticky top-0 z-2">
          <Header />
        </div>
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default Master;
