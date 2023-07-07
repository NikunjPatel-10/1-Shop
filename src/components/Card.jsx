import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";


const Card = ({ cardData }) => {
  // const [cartdata, setCartdata] = useState(false)

  const { showSkeleton } = useContext(Context)
  const navigate = useNavigate();

  /**
   * for for the card detail in detail-page
   */
  const detailsHandler = () => {
    localStorage.setItem("category", cardData.category);
    navigate("/details/" + cardData.id);
  };


  // useEffect(() => {
  //   setCartdata(true)
  // }, [cardData])



  /**
   * when the data is not loaded
   */
  if (showSkeleton) {
    return (
      <div className="card col-12 col-sm-6 col-md-4 m-2 p-2 gx-0 skeleton-card ">
        <div className="skeleton-img"></div>
        <div className="skeleton-text">
          <div className="skeleton-text-line"></div>
          <div className="skeleton-text-line"></div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div
        className="card col-12 col-sm-6 col-md-4  m-2 p-2 gx-0"
        onClick={detailsHandler}
      >
        <figure className="image-wrapper mb-0">
          <img src={cardData.img} className="card-img-top" alt="..." />
        </figure>
        <div className=" w-100 mt-2">
          <h5 className="text-center">{cardData.name}</h5>
          <p className="text-center mb-0">₹ {cardData.price}</p>
        </div>
      </div>
    )
  }

};

export default Card;
