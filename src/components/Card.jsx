import React from "react";

const Card = (props) => {
  //   console.log(props.cardData.name);
  return (
    <div className="card col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-xs-12 m-1 p-2 gx-0">
      <figure className="image-wrapper mb-0">
        <img src={props.cardData.img} alt="..." />
      </figure>
      <div className=" w-100 ">
        <h5 className="">{props.cardData.name}</h5>
        <p className="">₹{props.cardData.price}</p>
      </div>
    </div>
  );
};

export default Card;
