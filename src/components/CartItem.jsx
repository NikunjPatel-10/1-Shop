import React, { useEffect, useState } from "react";
import { updateCartProducts } from "../services/apiservice";
import useCartData from "./../hooks/useCartData";
import { IconX } from "@tabler/icons-react";

const CartItem = ({ cartData, updateTotalPrice, onDeleteProduct }) => {
  const { name, img, price, category, id, quantity, totalPrice } = cartData;
  console.log(img);


  const [cart, setCart] = useState({
    counter: quantity,
    Price: totalPrice,
  });

  /**
   * for decrease the quantity and update the price 
   */
  const removeHandler = () => {
    if (cart.counter > 1) {
      const updatedCounter = cart.counter - 1;
      const updatedPrice = cart.Price - price;

      /**
       * update the data in the database
       */
      updateCartProducts(
        {
          ...cartData,
          totalPrice: updatedPrice,
          quantity: updatedCounter,
        },
        id
      )


      setCart({
        counter: updatedCounter,
        Price: updatedPrice,
      });
      updateTotalPrice(-price);
    }
  };

  /**
   * increase quabtity and updated price
   */
  const addHandler = () => {
    const updatedCounter = cart.counter + 1;
    const updatedPrice = price * updatedCounter;

    /**
     * update data in database
     */
    updateCartProducts(
      { ...cartData, totalPrice: updatedPrice, quantity: updatedCounter },
      id
    );

    setCart({
      counter: updatedCounter,
      Price: updatedPrice,
    });
    updateTotalPrice(price);
  };

  /**for delete data
   * send id to cart component
   * @param {*} id
   */
  const deleteCartItemHandler = async (id) => {
    onDeleteProduct(id);
  };

  return (
    <>
      <tr className=" justify-content-between cart-item p-2 position-relative border ">
        <td >
          <div className="d-flex" >
            <figure className="cart-img-wrapper mb-0 d-flex justify-content-center align-items-center me-3">
              <img src={img[0]} alt="no img found" />
            </figure>
            <p className="mb-0 d-flex align-items-center">{name}</p>
          </div>
        </td>
        <td >

          <div className="d-flex ">
            <button
              className={`${cart.counter < 2 ? "disabled" : ""
                } ${"remove-btn border"}`}
              onClick={() => removeHandler()}
            >
              <span>-</span>
            </button>
            <div className="quantity">
              <span className="px-2 ">{cart.counter}</span>
            </div>
            <button className="add-btn border" onClick={() => addHandler()}>
              <span>+</span>
            </button>
          </div>
        </td>
        <td>
          <p className="px-3 mb-0">₹ {cart.Price}</p>
        </td>
        <div
          className="close bg-dark bg-opacity-50  "
          onClick={() => deleteCartItemHandler(id)}
        >
          <button className="border-0 bg-transparent ">
            <IconX className="text-white" height={16} width={16} />
          </button>
        </div>
      </tr>

    </>
  );
};

export default CartItem;
