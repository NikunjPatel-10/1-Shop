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
        if(response){
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
  
        }
        setShowSkeleton(false)    
        // console.log(response);

            // setTimeout(() => {

        // }, 500)
        
      })
      .catch((error) => {
        setShowSkeleton(false)
        console.log("error while fetching the men clothes", error);
      });
  }, [setShowSkeleton]);
  return menProducts;
};

export default useMenData;
