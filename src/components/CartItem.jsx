import React, { useEffect, useState } from "react";
import { updateCartProducts } from "../services/apiservice";
import useCartData from "./../hooks/useCartData";

const CartItem = ({ cartData, updateTotalPrice }) => {
  const getCartData = useCartData();
  const [cartUpdate, setCartUpdate] = useState([]);

  // useEffect(() => {
  //   setCartUpdate(getCartData);
  // }, getCartData);
  const { name, img, price, category, id, quantity, totalPrice } = cartData;
  const [cart, setCart] = useState({
    counter: quantity,
    Price: totalPrice,
  });
  const removeHandler = () => {
    if (cart.counter > 1) {
      const updatedCounter = cart.counter - 1;
      const updatedPrice = cart.Price - price;
      updateCartProducts(
        {
          ...cartData,
          totalPrice: updatedPrice,
          quantity: updatedCounter,
        },
        id
      ).then((res) => {
        if (res) {
          getCartData;
          console.log(getCartData);
        }
      });

      setCart({
        counter: updatedCounter,
        Price: updatedPrice,
      });
      updateTotalPrice(-price);
    }
  };
  const addHandler = () => {
    const updatedCounter = cart.counter + 1;
    const updatedPrice = price * updatedCounter;
    updateCartProducts(
      { ...cartData, totalPrice: updatedPrice, quantity: updatedCounter },
      id
    ).then((res) => {
      if (res) {
        cartUpdate;
      }
    });

    // cartUpdate;
    setCart({
      counter: updatedCounter,
      Price: updatedPrice,
    });
    updateTotalPrice(price);
  };
  return (
    <>
      <li className="d-flex justify-content-between cart-item p-2">
        <div className="d-flex ">
          <figure className="cart-img-wrapper mb-0 d-flex justify-content-center align-items-center me-3">
            <img src={img} alt="no img found" />
          </figure>
          <p className="mb-0">{name}</p>
        </div>
        <div className="d-flex">
          <p className="px-3 mb-0">₹ {cart.Price}</p>
          <div>
            <button
              className={`${
                cart.counter < 2 ? "disabled" : ""
              } ${"remove-btn"}`}
              onClick={() => removeHandler()}
            >
              <span>-</span>
            </button>
            <span className="px-2">{cart.counter}</span>
            <button className="add-btn" onClick={() => addHandler()}>
              <span>+</span>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
