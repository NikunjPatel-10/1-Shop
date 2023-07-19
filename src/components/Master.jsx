import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import useCartData from "../hooks/useCartData";
import Context from "../context/Context";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";

const Master = () => {
  const getCartData = useCartData();
  const { setIsHeader } = useContext(Context)

  const headerHandler = () => {
    setIsHeader(false)
  }


  let i = 1
  console.log(i + 1);

  const { setCartItems, cartItems } = useContext(Context);

  useEffect(() => {
    setCartItems(getCartData)
  }, [getCartData])

  return (

    <div className="h-100  d-flex flex-column  overflow-x-hidden overflow-y-auto">
      <div className="position-sticky top-0 z-2">
        <Header />
      </div>
      <div className="flex-grow-1" onClick={headerHandler}>
        <ProtectedRoute />
      </div>
      <Footer />
    </div>

  );
};

export default Master;
