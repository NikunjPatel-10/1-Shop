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

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
            alt="Third slide"
          // style={{ height: "600px", width: '100%' }}
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 object-fit-fill"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
            alt="First slide"
          // style={{ height: "600px", width: '100%' }}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselData;
