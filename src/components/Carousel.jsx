import React, { useEffect } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselData = () => {

  const carouselData = [
    {
      img: 'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp',
      heading: 'NEW ARRIVALS'
    },
    {
      img: 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
      heading: 'WOMEN COLLECTIONS'
    },
    {
      img: 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
      heading: ' MENS NEW ARRIVALS'
    },

  ]

  return (
    <>
      <Carousel indicators={false} fade >
        {carouselData.map((res) => {
          return (
            <Carousel.Item key={res.heading}>
              <img
                className="d-block w-100"
                src={res.img}
                alt="Second slide"
              />
              <Carousel.Caption className="text-start ">
                <h2 className="text-dark main-heading animated">{res.heading}</h2>
                <button className=" shop-btn btn-animated">SHOP NOW</button>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}

      </Carousel>

    </>
  );
};

export default CarouselData;
