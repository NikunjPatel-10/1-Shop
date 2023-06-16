import React, { useEffect, useState } from "react";
import useCartData from "./../hooks/useCartData";
import CartItem from "../components/CartItem";

const Cart = () => {
  const quantity = 1;
  const getCartData = useCartData();
  const [cartData, setCartData] = useState([]);
  const [total , setTotal] = useState();

  
  useEffect(() => {
    setCartData(getCartData);
    // if(cartData){
      console.log('hello');
     
    // }
  }, [getCartData,cartData]);
  // console.log(cartData);
  
  const totalPriceHandler = (price)=>{
    setTotal(cartData.reduce((total,item)=> total += +item.totalPrice,0 ))
  }



  return (
    <div className="h-100   m-3 align-items-center ">
      <ul className=" cart-size  p-0">
        {cartData.map((data) => {
          // console.log(data);
          return (
            <>
              <CartItem key={data.id} cartData={...data}  onCartPrice = {totalPriceHandler}/>
            </>
          );
        })}
        <li className="d-flex justify-content-between  border-top border-dark">
          <p>Total Amount</p>
          <p>{total} </p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
