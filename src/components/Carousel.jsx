import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselData = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=1380&t=st=1686563511~exp=1686564111~hmac=6b5b5cd08ef6839bd010034712e611159fd0ca91af5dd3f098181da30863aec5"
            alt="Second slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=1380&t=st=1686143603~exp=1686144203~hmac=88de2477feb6b36a9bdad72e9d4c5c6bba0188550c6a3a64cfe9e0533990a311"
            alt="Third slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 object-fit-fill"
            src="https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-10684.jpg?w=1380&t=st=1686574305~exp=1686574905~hmac=87ed0db65db6ef78048c8836edacf3ba0c7d3707470ac11b0983793516edcf27"
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselData;
