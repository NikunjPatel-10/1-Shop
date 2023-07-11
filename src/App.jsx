import { useState } from "react";
import "./App.css";
import Routing from "./components/Routing";
import ContextProvider from './context/ContextProvider'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <ContextProvider>
      <Routing />

    </ContextProvider>
  );
}

export default App;
