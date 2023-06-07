import React, { useEffect, useState } from "react";
import { getMenProducts } from "../services/apiservice";
import useMenData from "../hooks/useMenData";
import Card from "../components/Card";
import useWomenData from "../hooks/useWomenData";

const Home = () => {
  const data = useMenData();
  const [mendata, setMenData] = useState([]);
  const womenProducts = useWomenData();
  const [womendata, setWomenData] = useState([]);

  useEffect(() => {
    setMenData(data);
    setWomenData(womenProducts);
  }, [data, womenProducts]);
  // console.log(mendata);
  return (
    <div className="h-100 pt-4">
      <div className="main-wrapper">
        <div className="d-flex justify-content-between pb-2">
          <span>For men</span>
          <span className="pe-3">See All</span>
        </div>
        <div className="row">
          {mendata.map((res) => {
            // console.log(res);
            return <Card key={res.id} cardData={res} />;
          })}
        </div>
        <div>
          <div className="d-flex justify-content-between py-2">
            <span>For Women</span>
            <span className="pe-3">see All</span>
          </div>
          <div className="row">
            {womendata.map((res) => {
              // console.log(res);
              return <Card key={res.id} cardData={res} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
