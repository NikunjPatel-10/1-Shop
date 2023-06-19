import React, { useContext, useEffect, useState } from "react";
import useCartData from "./../hooks/useCartData";
import CartItem from "../components/CartItem";
import Context from "../context/Context";

const Cart = () => {
  const getCartData = useCartData();
  const [cartData, setCartData] = useState([]);
  const [total , setTotal] = useState(0);
  

  
  useEffect(() => {
    setCartData(getCartData);
    }, [getCartData]);

    useEffect(()=>{
      totalAmountHandler()
    },[cartData])
    
    const totalAmountHandler =  ()=>{
      if(cartData){
        setTotal( cartData.reduce((total,item)=> total += parseInt(item.totalPrice),0 ) )
      }
      
      }
    
      const updateTotalPrice = (updatedPrice) => {
        setTotal(total + parseInt(updatedPrice));
      };
    
  return (
    <div className="h-100   m-3 align-items-center ">
      <ul className=" cart-size  p-0">
        {cartData.map((data) => {
          return (
              <CartItem key={data.id} cartData={...data}  updateTotalPrice={updateTotalPrice} />
          );
        })}
        <li className="d-flex justify-content-between  border-top border-dark px-2">
          <p>Total Amount</p>
          <p>₹{total} </p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
