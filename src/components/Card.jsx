import React from "react";

const Card = (props) => {
  //   console.log(props.cardData.name);
  return (
    <div className="card col-12 col-sm-6 col-md-4  m-2 p-2 gx-0">
      <figure className="image-wrapper mb-0">
        <img src={props.cardData.img} className="card-img-top" alt="..." />
      </figure>
      <div className=" w-100 ">
        <h5 className="">{props.cardData.name}</h5>
        <p className="">₹{props.cardData.price}</p>
      </div>
    </div>
  );
};

export default Card;
