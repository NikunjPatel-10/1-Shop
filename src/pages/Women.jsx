import React, { useState, useEffect, useContext } from "react";
import useWomenData from "../hooks/useWomenData";
import Card from "../components/Card";
import Context from "../context/Context";
import Skeleton from "../components/Skeleton";

const Women = () => {

  /**
   * get the data from womendata hook
   */
  const data = useWomenData();
const {showSkeleton} = useContext(Context)
  const [womenProducts, setWomenProducts] = useState([]);
  const skeletonArray = Array(womenProducts.length || 6).fill()

  useEffect(() => {
    setWomenProducts(data);
  }, [data]);

  return (
    <div className="womenpage-wrapper">
      <div className="row justify-content-center">
        {showSkeleton ? skeletonArray.map((_, index)=>  <Skeleton key={index} />) : womenProducts.map((res) => {
          return <Card key={res.id} cardData={res} />;
        })}
        {}
      </div>
    </div>
  );
};

export default Women;
