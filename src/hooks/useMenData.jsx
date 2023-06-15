import React, { useEffect, useState } from "react";
import { getMenProducts } from "../services/apiservice";

const useMenData = () => {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    getMenProducts()
      .then((response) => {
        // console.log(response);
        const responseData = [];
        for (const key in response.data) {
          const id = key;
          const shortData = response.data;

          const item = {
            id: id,
            name: shortData[id].name,
            img: shortData[id].img,
            price: shortData[id].price,
            category: shortData[id].category,
          };

          responseData.push(item);
        }
        setMenProducts(responseData);
      })
      .catch((error) => {
        console.log("error while fetching the men clothes", error);
      });
  }, []);
  return menProducts;
};

export default useMenData;
