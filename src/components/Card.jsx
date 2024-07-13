import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ cardData }) => {


  const navigate = useNavigate();

  /**
   * for for the card detail in detail-page
   */
  const detailsHandler = () => {
    localStorage.setItem("category", cardData.category);
    navigate("/details/" + cardData.id);
  };



    return (
      <div
        className="card col-12 col-sm-6 col-md-4  m-2 p-2 gx-0 position-relative"

      >
        <figure className="image-wrapper mb-0">
          <img src={cardData.img} className="card-img-top" alt="..." />
        </figure>
        <div className="w-100 text-center mt-3" onClick={detailsHandler}>
          <button className="quick-veiw-btn">Quick Veiw</button>
        </div>
        <div className=" w-100 mt-2">
          <h5 className="text-center">{cardData.name}</h5>
          <p className="text-center mb-0">₹ {cardData.price}</p>
        </div>
      </div>
    )
  

};

export default Card;
