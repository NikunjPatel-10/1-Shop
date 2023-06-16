import React, { useState } from "react";
import { updateCartProducts } from "../services/apiservice";

const CartItem = ({ cartData }) => {
  //   const { data } = props;
  const { name, img, price, category, id, quantity, totalPrice, onCartPrice } =
    cartData;
  console.log(quantity);
  const [cart, setCart] = useState({
    counter: quantity,
    Price: totalPrice,
  });

  const removeHandler = () => {
    setCart((prevState) => {
      const updatedCounter = prevState.counter - 1;
      const updatedPrice = prevState.Price - price;

      if (updatedCounter > 0) {
        console.log("work");
        updateCartProducts(
          {
            ...cartData,
            totalPrice: updatedPrice,
            quantity: updatedCounter,
          },
          id
        );
        return {
          counter: updatedCounter,
          Price: updatedPrice,
        };
      } else {
        return {
          counter: prevState.counter,
          Price: prevState.Price,
        };
      }
    });
    onCartPrice(cart.Price);
  };
  const addHandler = () => {
    setCart((prevState) => {
      const updatedCounter = prevState.counter + 1;
      const updatedPrice = price * updatedCounter;
      updateCartProducts(
        { ...cartData, totalPrice: updatedPrice, quantity: updatedCounter },
        id
      );
      return {
        counter: updatedCounter,
        Price: updatedPrice,
      };
    });
    onCartPrice(cart.Price);
  };
  return (
    <div>
      <li className="d-flex justify-content-between ">
        <div className="d-flex ">
          <figure className="cart-img-wrapper mb-0 d-flex justify-content-center align-items-center me-3">
            <img src={img} alt="no img found" />
          </figure>
          <p>{name}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2">₹ {cart.Price}</p>
          <div>
            <button
              className={`${
                cart.counter < 2 ? "disabled" : ""
              } ${"remove-btn"}`}
              onClick={() => removeHandler()}
            >
              <span>-</span>
            </button>

            <span className="mx-2">{cart.counter}</span>
            <button className="add-btn" onClick={() => addHandler()}>
              <span>+</span>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
