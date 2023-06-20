import React from "react";

const Context = React.createContext({
  cartItems: [],
  setCartItems: () => { },
});

export default Context;
