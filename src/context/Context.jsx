import React from "react";
import { boolean } from "yup";

const Context = React.createContext({
  cartItems: [],
  setCartItems: () => { },
  showSkeleton: boolean,
  setShowSkeleton: () => { },
});

export default Context;
