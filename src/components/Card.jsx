import React from "react";

const Card = (props) => {
  //   console.log(props.cardData.name);
  return (
    <div className="card col-12 col-sm-6 col-md-4 col-lg-3 m-1 p-2 d-flex flex-column justify-content-center align-items-center">
      <figure className="image-wrapper mb-0">
        <img src={props.cardData.img} alt="..." />
      </figure>
      <div className="card-body w-100 px-2">
        <h5 className="card-title">{props.cardData.name}</h5>
        <p className="card-text">₹{props.cardData.price}</p>
      </div>
    </div>
  );
};

export default Card;
