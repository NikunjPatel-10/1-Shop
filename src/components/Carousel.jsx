import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselData = () => {

  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp"
            alt="Second slide"
          // style={{ height: "600px", width: '100%' }}
          />

          <Carousel.Caption className="text-start ">
            <h2 className="text-dark main-heading">New Arrivals</h2>
            <button className=" shop-btn">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
            alt="Third slide"
          // style={{ height: "600px", width: '100%' }}
          />

          <Carousel.Caption className="text-start ">
            <h2 className="text-dark main-heading">Women Clothes</h2>
            <button className=" shop-btn">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 object-fit-fill"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
            alt="First slide"
          // style={{ height: "600px", width: '100%' }}
          />
          <Carousel.Caption className="text-start ">
            <h2 className="text-dark main-heading">Mens New Arrival</h2>
            <button className=" shop-btn">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselData;
