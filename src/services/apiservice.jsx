import axios from "axios";
import { baseUrl } from "../../environment";

export const getMenProducts = async () => {
  return await axios.get(baseUrl + "product/men.json").then((res) => {
    console.log(res);
  });
};
export const getWomenProducts = async () => {
  return await axios.get(baseUrl + "product/women.json");
};

export const getProductsById = async (id) => {
  console.log(id);
  return await axios
    .get(baseUrl + "product/men/" + id + ".json")
    .then((res) => {
      console.log(res);
    });
};
