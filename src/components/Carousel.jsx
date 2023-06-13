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
            src="https://img.freepik.com/free-photo/girl-yellow-wall-with-shopping-bags_1157-34348.jpg?w=1380&t=st=1686633040~exp=1686633640~hmac=452a9d50395338272474005e7706cf1600ba46ac67b4b3c6d049cfc8d951fd04"
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
