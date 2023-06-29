import React, { useEffect, useState } from "react";
import { getMenProducts } from "../services/apiservice";
import { useContext } from "react";
import Context from "../context/Context";

const useMenData = () => {
  const [menProducts, setMenProducts] = useState([]);

  const { showSkeleton, setShowSkeleton } = useContext(Context)

  useEffect(() => {
    setShowSkeleton(true)
    getMenProducts()
      .then((response) => {
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
        setMenProducts(responseData);

      })
      .catch((error) => {
        console.log("error while fetching the men clothes", error);
      });
  }, []);
  return menProducts;
};

export default useMenData;
