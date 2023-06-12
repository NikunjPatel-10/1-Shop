import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import context from "../context/Context";

const Card = ({ cardData }) => {
  // console.log(cardData);
  //   console.log(props.cardData.name);
  const navigate = useNavigate();
  const { setCategory } = useContext(context);
  setCategory(cardData.category);
  // console.log(category);

  const detailsHandler = () => {
    navigate("/details/" + cardData.id);
  };
  return (
    <div
      className="card col-12 col-sm-6 col-md-4  m-2 p-2 gx-0"
      onClick={detailsHandler}
    >
      <figure className="image-wrapper mb-0">
        <img src={cardData.img} className="card-img-top" alt="..." />
      </figure>
      <div className=" w-100 ">
        <h5 className="">{cardData.name}</h5>
        <p className="">₹{cardData.price}</p>
      </div>
    </div>
  );
};

export default Card;
