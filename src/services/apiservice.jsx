import axios from "axios";
import { baseUrl } from "../../environment";

export const getMenProducts = async () => {
  return await axios.get(baseUrl + "product/men.json");
};
export const getWomenProducts = async () => {
  return await axios.get(baseUrl + "product/women.json");
};

export const getproducts = async () => {
  return await axios
    .get("https://amazon-product-reviews-keywords.p.rapidapi.com/categories")
    .then((res) => {
      console.log(res);
    });
};
