import React, { useEffect, useState } from "react";
import useMenData from "../hooks/useMenData";
import Card from "../components/Card";
import useWomenData from "../hooks/useWomenData";
import { useNavigate } from "react-router-dom";
import CarouselData from "../components/Carousel";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const menProducts = useMenData();
  const womenProducts = useWomenData();
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  // const [products, setProducts] = useState({ men: [], women: [] });
  const navigate = useNavigate();
  useEffect(() => {
    setWomenData(womenProducts.slice(-5));
  }, [womenProducts]);


  useEffect(() => {
    setMenData(menProducts.slice(-5));
  }, [menProducts]);

  // const menListHandler = () => {
  //   navigate("/men");
  // };

  // const womenListHandler = () => {
  //   navigate("/women");
  // };

  return (
    <>
      <CarouselData />
      <div className="main-wrapper p-2">
        <div className="py-2   px-5 d-none d-sm-block ">

        </div>
        <div className="row justify-content-center">
          {menData.map((res) => {
            // console.log(res);
            return <Card key={res.id} cardData={res} />;
          })}
        </div>

        <div className=" py-2  px-5 d-none d-sm-block ">
        </div>
        <div className="row justify-content-center">
          {womenData.map((res) => {
            // console.log(res);
            return <Card key={res.id} cardData={res} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
