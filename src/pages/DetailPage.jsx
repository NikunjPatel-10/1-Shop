import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { getProductsById } from "../services/apiservice";
import context from "../context/Context";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const { category } = useContext(context);
  console.log(category);
  const [detail, setDetail] = useState();

  useEffect(() => {
    getProductsById(category, id)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data.data.img);

  return (
    <div className="d-flex  flex-column align-items-center justify-content-center">
      <div>
        {detail ? (
          <>
            <h2>{detail.name}</h2>
            <figure className="detail-img-wrapper mb-0">
              <img src={detail.img} alt="no img found" />
            </figure>
            <p>₹ {detail.price}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <button className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailPage;
