import React, { useContext, useEffect, useState } from "react";
import useMenData from "../hooks/useMenData";
import Card from "../components/Card";
import useWomenData from "../hooks/useWomenData";
import { useNavigate } from "react-router-dom";
import CarouselData from "../components/Carousel";
import { ToastContainer, toast } from "react-toastify";
import Context from "../context/Context";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const menProducts = useMenData();
  const womenProducts = useWomenData();
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const {showSkeleton} = useContext(Context)
  const navigate = useNavigate();
  useEffect(() => {
    setWomenData(womenProducts.slice(-5));
    setMenData(menProducts.slice(-5));
  }, [womenProducts, menProducts]);
  const product = [...menData, ...womenData];
  const skeletonArray = Array(product.length || 6).fill()


  return (
    <>
      <CarouselData />
      <div className="main-wrapper p-2">
        <div className="py-2   px-5 d-none d-sm-block "></div>
        <div className="row justify-content-center">
          {showSkeleton ? skeletonArray.map((_,index)=>  <Skeleton key={index} />) : product.map((res) => {
            // console.log(res);
            return <Card key={res.id} cardData={res} />;
          })}
        </div>

     
      </div>
    </>
  );
};

export default Home;
