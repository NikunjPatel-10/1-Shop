import React, { useState, useEffect } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState("");

  useEffect(() => {
    console.log('context');

  }, [cartItems])
  const contextValue = {
    cartItems,
    setCartItems,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
