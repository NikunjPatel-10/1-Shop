import React, { useContext, useEffect, useState } from "react";
import useCartData from "./../hooks/useCartData";
import CartItem from "../components/CartItem";
import Context from "../context/Context";
import { deleteCartProduct } from "../services/apiservice";
import emptyCart from './../assets/images/empty-cart.png'
import { Link } from "react-router-dom";

const Cart = () => {
  const getCartData = useCartData();
  const [total, setTotal] = useState(0);

  const { setCartItems, cartItems } = useContext(Context);
  // const cartData = cartItems
  const [cartData, setCartData] = useState([cartItems])
  console.log(cartData);

  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setCartItems(getCartData)
  }, [getCartData])



  useEffect(() => {
    totalAmountHandler()
  }, [cartData])

  const totalAmountHandler = () => {
    if (cartData) {
      setTotal(cartData.reduce((total, item) => total += parseInt(item.totalPrice), 0))
    }
  }

  const updateTotalPrice = (updatedPrice) => {
    setTotal(total + parseInt(updatedPrice));
  };

  const deleteProductHandler = async (deleteItemId) => {
    if (deleteItemId) {
      await deleteCartProduct(deleteItemId);
      setCartItems((prevData) => prevData.filter((item) => item.id !== deleteItemId))
    }
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-container"></div>
      {(cartItems.length < 1) ?
        <div class="empty-cart shadow">
          <figure className="mb-0 bg-primary empty-cart-wrapper">
            <img src={emptyCart} />
          </figure>
          <h3>Your Cart is Empty</h3>
          <h4>Add something to make me happy :)</h4>
          <Link to={'/home'}>
            <button className="continue-btn">continue shopping</button>
          </Link>
        </div>
        : <div className="h-100 row  m-3 ">
          {/* <ul className=" cart-size  p-0">
            {cartData.map((data) => {
              return (
                <CartItem key={data.id} cartData={...data} updateTotalPrice={updateTotalPrice} onDeleteProduct={deleteProductHandler} />
              );
            })}
            <li className="d-flex justify-content-between  border-top border-dark px-2">
              <p>Total Amount</p>
              <p>₹{total} </p>
            </li>
          </ul> */}
          <div className="col-lg-10 col-xl-7">
            <table className="table table-striped w-100 border">
              <thead className="border">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total-Price</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((data) => {
                  return (
                    <CartItem key={data.id} cartData={...data} updateTotalPrice={updateTotalPrice} onDeleteProduct={deleteProductHandler} />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-sm-10 col-lg-7 col-xl-5 border p-2">
            <div >
              <h4 >
                Cart Totals
              </h4>
              <div >
                <span >
                  Subtotal:
                </span>
                <span >
                  ₹{total}
                </span>

              </div>
              <div >
                <div >
                  <span >
                    Shipping:
                  </span>
                </div>
                <div >
                  <p >
                    There are no shipping methods available. Please double check your address, or contact us if you need any help.
                  </p>
                  <div >
                    <span >
                      Calculate Shipping
                    </span>
                    <div >
                      <select className="" name="time" tabindex="-1" aria-hidden="true">
                        <option>Select a country...</option>
                        <option>USA</option>
                        <option>UK</option>
                      </select>
                      <div className="dropDownSelect2"></div>
                    </div>
                    <div className="bor8 bg0 m-b-12">
                      <input className="" type="text" name="state" placeholder="State /  country" />
                    </div>
                    <div className="">
                      <input className="" type="text" name="postcode" placeholder="Postcode / Zip" />
                    </div>
                    <div >
                      <div >
                        Update Totals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div >
                <div >
                  <span >
                    Total:
                  </span>
                </div>
                <div >
                  <span >
                    ₹{total}
                  </span>
                </div>
              </div>
              <button >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Cart;
