import React, { useEffect, useState } from "react";
import { getUserCartDataById } from "../services/apiservice";

const useCartData = () => {
  const [cartProducts, setCartProducts] = useState([]);

  let userId = localStorage.getItem("user")

  useEffect(() => {

    getUserCartDataById(userId).then((response) => {
      console.log(response.data.cart);
      const responseData = [];

      for (const key in response.data.cart) {
        const id = key;

        const cartItem = {
          id: id,
          name: response.data.cart[id].name,
          img: response.data.cart[id].img,
          price: response.data.cart[id].price,
          category: response.data.cart[id].category,
          quantity: response.data.cart[id].quantity,
          totalPrice: response.data.cart[id].totalPrice,

        }
        responseData.push(cartItem);
        console.log(responseData);
      }
      setCartProducts(responseData);
    }).catch((error) => {
      console.log("error while fetching products", error);
    });
  }, [])

  return cartProducts;
}

export default useCartData;
