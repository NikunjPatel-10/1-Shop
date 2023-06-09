import React, { useEffect, useState } from "react";
import useMenData from "../hooks/useMenData";
import Card from "../components/Card";
import useWomenData from "../hooks/useWomenData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useMenData();
  const [mendata, setMenData] = useState([]);
  const womenProducts = useWomenData();
  const [womendata, setWomenData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMenData(data);
    setWomenData(womenProducts);
  }, [data, womenProducts]);
  // console.log(mendata);
  const menLastFiveData = mendata.slice(-5);
  const womenLastFiveData = womendata.slice(-5);
  // const products = getproducts();

  const menListHandler = () => {
    navigate("/men");
  };

  const womenListHandler = () => {
    navigate("/women");
  };

  return (
    <div className=" p-2 ">
      <div className="main-wrapper ">
        <div className="d-flex justify-content-between align-items-center ">
          <span>For men</span>
          <span className="see-all-text" onClick={menListHandler}>
            SEE ALL
          </span>
        </div>
        <div className="row">
          {menLastFiveData.map((res) => {
            // console.log(res);
            return <Card key={res.id} cardData={res} />;
          })}
        </div>

        <div className="d-flex justify-content-between py-2">
          <span>For Women</span>
          <span className="see-all-text" onClick={womenListHandler}>
            SEE ALL
          </span>
        </div>
        <div className="row">
          {womenLastFiveData.map((res) => {
            // console.log(res);
            return <Card key={res.id} cardData={res} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
