import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProductsById, postCartProducts } from "../services/apiservice";
import useCartData from "../hooks/useCartData";
import Context from "../context/Context";
import { Carousel } from "react-bootstrap";

const DetailPage = () => {

  const [detail, setDetail] = useState({});
  const [imgIndex, setImgIndex] = useState(0)
  const { cartItems, setCartItems } = useContext(Context);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const path = useLocation();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();



  // useEffect(() => {
  //   if (path.pathname.includes("/details")) {
  //     console.log();
  //   } else {
  //     localStorage.removeItem("category");
  //   }
  // }, [path]);

  useEffect(() => {
    // localStorage.removeItem("category");

    const category = localStorage.getItem("category");

    // console.log("category", category);
    const fetchData = async () => {
      try {
        const response = await getProductsById(category, id);
        setDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  /**
   * to get the details of cart items
   */
  console.log(detail);
  const cartItem = detail;
  cartItem.quantity = 1;
  cartItem.totalPrice = cartItem.price;
  // console.log(cartItem);
  const cartDataHandler = () => {
    postCartProducts(cartItem);
    // window.history.back();
    navigate(-1);
    setCartItems((prevItems) => [...prevItems, cartItem])
    // console.log(cartItems);
  };

  const showimage = (index) => {
    setImgIndex(index)
    // for (let i = 0; i < (detail.img).length; i++) {
    //   (detail.img)[i].className = (detail.img).className.replace("active", "")
    // }
    // (detail.img)[index].className = "active"
  }

  const openOverlay = () => {
    setIsOverlayOpen(true)
  }

  const closeOverlay = () => {
    setIsOverlayOpen(false)
    setCurrentSlide(0);
  }

  return (
    <div className=" h-100 w-75  m-auto">

      <div className=" h-100 w-100 row justify-content-center align-items-center p-3  overflow-hidden  ">

        <div className="col-12 col-sm-7 gx-0">
          <figure className="big-img-wrapper" onClick={openOverlay}>
            <img src={detail.img && detail.img[imgIndex]} alt="no img found" />
          </figure>
          {/* for overlay  */}
          {isOverlayOpen &&
            <figure>
              <div className="overlay" onClick={closeOverlay}>
                <img src={detail.img && detail.img[imgIndex]} alt="no img found" className="overlay-img" />
              </div>
            </figure>

          }

          <div className="row ">
            {(detail.img) && (detail.img).map((img, index) => (
              <div className="col-6 col-sm-3 my-1 " onClick={() => showimage(index)}>
                <figure className={`small-img-wrapper mb-0 ${index === imgIndex ? "selected" : ''}
                `}>
                  <img src={img} alt="no-image found" />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-5 p-3">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora est corporis cum asperiores officiis incidunt rerum veniam praesentium dolores atque ullam, cumque quam ipsam tenetur!</p>
            <p className="p-2 mb-0"> Name : {detail.name}</p>
            <p className="p-2 mb-0"> Price : ₹ {detail.price}</p>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button className="btn btn-success" onClick={cartDataHandler}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
