import axios from "axios";
import { baseUrl } from "../../environment";

export const getMenProducts = async () => {
  return await axios.get(baseUrl + "product/men.json");
};

export const getWomenProducts = async () => {
  return await axios.get(baseUrl + "product/women.json");
};

export const getProductsById = async (category, id) => {
  return await axios.get(baseUrl + "product/" + `${category}/` + id + ".json")
};

export const postCartProducts = async (data) => {
  return await axios.post(baseUrl + "cart.json", { ...data }).then((res) => {
    // console.log(res);
  });
};

export const getCartProducts = async () => {
  return await axios.get(baseUrl + "cart.json");
};

export const updateCartProducts = async (data, id) => {
  return await axios.put(baseUrl + "cart/" + id + ".json", { ...data });
};

export const deleteCartProduct = async (id) => {
  return await axios.delete(baseUrl + "cart/" + id + ".json");
};
