import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/apiservice";
import context from "../context/Context";

const DetailPage = () => {
  const id = useParams();
  const { category } = useContext(context);
  console.log(category);
  const data = getProductsById(id.id);
  return <div>DetailPage</div>;
};

export default DetailPage;
