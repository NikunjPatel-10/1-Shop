import React, { useState, useEffect } from "react";
import useWomenData from "../hooks/useWomenData";
import Card from "../components/Card";

const Women = () => {

  /**
   * get the data from womendata hook
   */
  const data = useWomenData();

  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    setWomenProducts(data);
  }, [data]);

  return (
    <div className="womenpage-wrapper">
      <div className="row">
        {womenProducts.map((res) => {
          // console.log(res);
          return <Card key={res.id} cardData={res} />;
        })}
      </div>
    </div>
  );
};

export default Women;
