import React, { useEffect, useState } from "react";
import useCartData from "./../hooks/useCartData";

const Cart = () => {
  const getCartData = useCartData();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(getCartData);
  }, [getCartData]);
  // console.log(cartData);
  return (
    <div className="h-100   m-3 align-items-center ">
      <ul className=" cart-size  p-0">
        {cartData.map((data) => {
          return (
            <li key={data.id} className="d-flex justify-content-between ">
              <div className="d-flex ">
                <figure className="cart-img-wrapper mb-0 d-flex justify-content-center align-items-center me-3">
                  <img src={data.img} alt="no img found" />
                </figure>
                <p>{data.name}</p>
              </div>
              <div className="d-flex">
                <p className="mx-2">₹ {data.price}</p>
                <div>
                  <button className="remove-btn ">
                    <span>-</span>
                  </button>
                  <span className="mx-2">1</span>
                  <button className="add-btn ">
                    <span>+</span>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
        <li className="d-flex justify-content-between  border-top border-dark">
          <p>Total Amount</p>
          <p>₹ 1000 </p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
