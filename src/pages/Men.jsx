import React, { useEffect, useState, useContext } from "react";
import useMenData from "../hooks/useMenData";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import Context from "../context/Context";

const Men = () => {
  const data = useMenData();
  const [menProducts, setMenProducts] = useState([]);
  const { showSkeleton } = useContext(Context)
  const skeletonCount = menProducts.length || 6; // Default to 6 if no data yet
  const skeletonArray = Array(skeletonCount).fill({});

  useEffect(() => {
    setMenProducts(data);
  }, [data]);
  return (
    <div className="menpage-wrapper">
      <div className="row justify-content-center">
      {showSkeleton ? skeletonArray.map((_, index)=> <Skeleton key={index} />
   
    ) : menProducts.map((res) => {
          // console.log(res);
          return <Card key={res.id} cardData={res} />;
        })}
      </div>
    </div>
  );
};

export default Men;
