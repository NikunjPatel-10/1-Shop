import React from "react";

const Context = React.createContext({
  cartItem: "",
  setCartItem: () => {},
});

export default Context;
