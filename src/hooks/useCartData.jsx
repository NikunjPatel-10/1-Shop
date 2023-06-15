import React, { useEffect, useState } from "react";
import { getCartProducts } from "../services/apiservice";

const useCartData = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    getCartProducts()
      .then((response) => {
        const responseData = [];
        for (const key in response.data) {
          const id = key;
          const cartItem = {
            id: id,
            name: response.data[id].name,
            img: response.data[id].img,
            price: response.data[id].price,
            category: response.data[id].category,
          };
          responseData.push(cartItem);
        }
        setCartProducts(responseData);
      })
      .catch((error) => {
        console.log("error while fetching products", error);
      });
  }, []);

  return cartProducts;
};

export default useCartData;
