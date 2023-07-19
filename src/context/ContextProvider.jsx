import React, { useState, useEffect } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [isHeader, setIsHeader] = useState(false)

  // useEffect(() => {
  //   console.log('context');

  // }, [cartItems])
  const contextValue = {
    cartItems,
    setCartItems,
    showSkeleton,
    setShowSkeleton,
    isHeader,
    setIsHeader,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
