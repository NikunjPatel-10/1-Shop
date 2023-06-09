import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [category, setCategory] = useState("");

  const contextValue = {
    category,
    setCategory,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
