import React, { useContext, useEffect, useState } from "react";
import useCartData from "./../hooks/useCartData";
import CartItem from "../components/CartItem";
import Context from "../context/Context";
import { deleteCartProduct } from "../services/apiservice";
import emptyCart from './../assets/images/empty-cart.png';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const getCartData = useCartData();
  const [total, setTotal] = useState(0);
  const userId = localStorage.getItem("user");
  const { setCartItems, cartItems } = useContext(Context);

  useEffect(() => {
    setCartItems(getCartData);
  }, [getCartData, setCartItems]);

  const [cartData, setCartData] = useState(cartItems);

  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems]);

  useEffect(() => {
    totalAmountHandler();
  }, [cartData]);

  const totalAmountHandler = () => {
    if (cartData) {
      setTotal(cartData.reduce((total, item) => total += parseInt(item.totalPrice), 0));
    }
  };

  const updateTotalPrice = (updatedPrice) => {
    setTotal(total + parseInt(updatedPrice));
  };

  const deleteProductHandler = async (deleteItemId) => {
    if (deleteItemId) {
      await deleteCartProduct(userId, deleteItemId);
      toast.success("Deleted successfully", {
        position: toast.POSITION.TOP_RIGHT
      });
      setCartItems((prevData) => prevData.filter((item) => item.id !== deleteItemId));
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container"></div>
      {cartItems.length < 1 ? (
        <div className="empty-cart">
          <figure className="mb-0 bg-primary empty-cart-wrapper">
            <img src={emptyCart} alt="Empty Cart" />
          </figure>
          <h3>Your Cart is Empty</h3>
          <h4>Add something to make me happy :)</h4>
          <Link to="/home">
            <button className="continue-btn">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content row m-3">
          <div className="col-12 col-lg-8 overflow-auto">
            <table className="table table-striped w-100 border rounded">
              <thead className="border">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((data) => (
                  <CartItem
                    key={data.id}
                    cartData={data}
                    updateTotalPrice={updateTotalPrice}
                    onDeleteProduct={deleteProductHandler}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-lg-4">
            <div className="summary border rounded p-3">
              <h4 className="fw-bold mb-3">Cart Totals</h4>
              <div className="row mb-3">
                <span className="col-3">Subtotal:</span>
                <span className="col-9 text-gray">₹{total}</span>
              </div>
              <div className="row">
                <div className="col-3">
                  <span>Shipping:</span>
                </div>
                <div className="col-9">
                  <p className="text-gray">
                    There are no shipping methods available. Please double-check your address, or contact us if you need any help.
                  </p>
                  <div className="mb-3 text-gray">Calculate Shipping</div>
                  <div className="mb-3">
                    <select className="text-gray w-100" name="country" tabIndex="-1" aria-hidden="true">
                      <option>Select a country...</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input type="text" name="state" placeholder="State / Country" className="w-100" />
                  </div>
                  <div className="mb-3">
                    <input type="text" name="postcode" placeholder="Postcode / Zip" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <span className="col-3">Total:</span>
                <span className="col-9 text-gray">₹{total}</span>
              </div>
              <Link to="/checkout">
                <button className="w-100 checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
