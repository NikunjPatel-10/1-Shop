import React, { useContext, useEffect, useState } from "react";
import { json, useLocation, useParams } from "react-router-dom";
import { getProductsById } from "../services/apiservice";
import context from "../context/Context";

const DetailPage = () => {
  const path = useLocation();
  const { id } = useParams();
  console.log(id);
  const { category } = useContext(context);
  console.log(category);
  const [detail, setDetail] = useState();

  // useEffect(() => {
  //   if (path.pathname.includes("/details")) {
  //     console.log();
  //   } else {
  //     localStorage.removeItem("category");
  //   }
  // }, [path]);

  useEffect(() => {
    // localStorage.removeItem("category");

    const cat = localStorage.getItem("category");

    console.log("category", category);
    const fetchData = async () => {
      try {
        const response = await getProductsById(cat, id);
        setDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category, id]);

  // console.log(data.data.img);

  return (
    <div className="d-flex  flex-column align-items-center justify-content-center h-100">
      <div>
        <div>
          {detail ? (
            <>
              <figure className="detail-img-wrapper mb-0">
                <img src={detail.img} alt="no img found" />
              </figure>
              <p className="p-2"> Name : {detail.name}</p>
              <p className="p-2"> Price : ₹ {detail.price}</p>
            </>
          ) : (
            <p>No data found</p>
          )}
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
