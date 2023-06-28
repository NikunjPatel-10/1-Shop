import React, { useEffect, useState } from "react";
import useMenData from "../hooks/useMenData";
import Card from "../components/Card";

const Men = () => {
  const data = useMenData();
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    setMenProducts(data);
  }, [data]);
  return (
    <div className="menpage-wrapper">
      <div className="row">
        {menProducts.map((res) => {
          // console.log(res);
          return <Card key={res.id} cardData={res} />;
        })}
      </div>
    </div>
  );
};

export default Men;
