import React, { useEffect, useState } from "react";
import { getMenProducts, getWomenProducts } from "../services/apiservice";

const useWomenData = () => {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    getWomenProducts().then((response) => {
      console.log(response);
      const responseData = [];
      for (const key in response.data) {
        const id = key;
        const shortData = response.data;

        const item = {
          id: id,
          name: shortData[id].name,
          img: shortData[id].img,
          price: shortData[id].price,
        };

        responseData.push(item);
      }
      setWomenProducts(responseData);
    });
  }, []);

  return womenProducts;
};

export default useWomenData;
