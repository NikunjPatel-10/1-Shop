import React, { useEffect } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselData = () => {
  // const a = document.querySelector('a[role="button"]')
  // const b = document.querySelector('carousel-control-prev-icon')
  // console.log(a);
  // useEffect(() => {
  //   // a?.classList.remove("carousel-control-prev")
  //   // b?.classList.add("carousel-control-prev")
  //   // a?.classList.add("arrow-wrapper")
  // }, [a])
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
      <Carousel indicators={false} >
        {carouselData.map((res) => {
          return (
            <CarouselItem key={res.heading}>
              <img
                className="d-block w-100"
                src={res.img}
                alt="Second slide"
              />

              <Carousel.Caption className="text-start ">
                <h2 className="text-dark main-heading animated">{res.heading}</h2>
                <button className=" shop-btn btn-animated">SHOP NOW</button>
              </Carousel.Caption>
            </CarouselItem>
          )
        })}

      </Carousel>

    </>
  );
};

export default CarouselData;
