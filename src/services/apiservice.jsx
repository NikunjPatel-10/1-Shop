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



/**
 * 
 * @param {*} data 
 * @param {*} id 
 * @returns 
 */
export const postUserCartProducts = async (data, id) => {
  return await axios.post(baseUrl + "users/" + id + "/cart" + ".json", { ...data }).then((res) => {
    console.log(res);
  });
};



/**
 * @description for cart
 * @returns 
 */
export const getUserCartDataById = async (id) => {
  return await axios.get(baseUrl + "users/" + id + ".json")
};


export const updateCartProducts = async (data, id) => {
  return await axios.put(baseUrl + "cart/" + id + ".json", { ...data });
};

export const deleteCartProduct = async (userId, cartItemId) => {
  const userDataUrl = baseUrl + "users/" + userId + "/cart/" + cartItemId + ".json";
  console.log(userDataUrl);
  return axios.delete(userDataUrl);
  // const userResponse = await axios.get(userDataUrl).then((res) => {
  //   console.log(res);
  //   return res.data
  // })
  // const cartData = userResponse.cart;
  // console.log(cartData);

  // const responseData = []
  // for (const key in cartData) {

  //   const id = key
  //   const cartItem = {
  //     id: id,
  //     name: cartData[id].name,
  //     img: cartData[id].img,
  //     price: cartData[id].price,
  //     category: cartData[id].category,
  //     quantity: cartData[id].quantity,
  //     totalPrice: cartData[id].totalPrice,

  //   }

  //   responseData.push(cartItem)
  // }

  // const index = responseData.findIndex((product) => product.id === cartItemId);

  // if (index !== -1) {
  //   responseData.splice(index, 1);
  // }


  // const updatedCartData = {
  //   ...userResponse,
  //   cart: responseData
  // }

  // return await axios.put(userDataUrl, updatedCartData)



};
// export const deleteCartProduct = async (userId, cartItemId) => {
//   const userDataUrl = baseUrl + "users/" + userId + ".json";
//   // console.log(cartDataUrl);

//   const userResponse = await axios.get(userDataUrl).then((res) => {
//     console.log(res);
//     return res.data
//   })
//   const cartData = userResponse.cart;
//   console.log(cartData);

//   const responseData = []
//   for (const key in cartData) {

//     const id = key
//     const cartItem = {
//       id: id,
//       name: cartData[id].name,
//       img: cartData[id].img,
//       price: cartData[id].price,
//       category: cartData[id].category,
//       quantity: cartData[id].quantity,
//       totalPrice: cartData[id].totalPrice,

//     }

//     responseData.push(cartItem)
//   }

//   const index = responseData.findIndex((product) => product.id === cartItemId);

//   if (index !== -1) {
//     responseData.splice(index, 1);
//   }


//   const updatedCartData = {
//     ...userResponse,
//     cart: responseData
//   }

//   return await axios.put(userDataUrl, updatedCartData)



// };



