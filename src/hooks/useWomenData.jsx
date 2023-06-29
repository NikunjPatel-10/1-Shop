import React, { useEffect, useState, useContext } from "react";
import { getWomenProducts } from "../services/apiservice";
import Context from "../context/Context";

const useWomenData = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const { showSkeleton, setShowSkeleton } = useContext(Context)

  useEffect(() => {
    setShowSkeleton(true)
    getWomenProducts().then((response) => {
      // console.log(response);
      setTimeout(() => {
        setShowSkeleton(false)
      }, 500)
      const responseData = [];
      for (const key in response.data) {
        const id = key;
        const shortData = response.data;

        const item = {
          id: id,
          name: shortData[id].name,
          img: shortData[id].img[0],
          price: shortData[id].price,
          category: shortData[id].category,
        };

        responseData.push(item);
      }
      setWomenProducts(responseData);
    });
  }, []);
  return womenProducts;
};

export default useWomenData;
