import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById, postCartProducts } from "../services/apiservice";
import Context from "../context/Context";
import { Carousel } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const DetailPage = () => {

  const [detail, setDetail] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  const { cartItems, setCartItems } = useContext(Context);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();



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
  // console.log(detail);
  const cartItem = detail;
  cartItem.quantity = 1;
  cartItem.totalPrice = cartItem.price;
  const cartDataHandler = () => {
    postCartProducts(cartItem);
    // window.history.back();
    // navigate(-1);
    setCartItems((prevItems) => [...prevItems, cartItem])
    // console.log(cartItems);\
    toast.success('Add to cart Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showimage = (index) => {
    setImgIndex(index)
  }

  const openOverlay = () => {
    setIsOverlayOpen(true)
  }

  const closeOverlay = () => {
    setIsOverlayOpen(false)
  }





  return (
    <div className=" h-100 w-75  m-auto">
      <div className=" h-100 w-100 row justify-content-center  p-3  overflow-hidden  ">

        <div className="col-12 col-sm-7 gx-0">
          <figure className="big-img-wrapper" onClick={openOverlay}>
            <img src={detail.img && detail.img[imgIndex]} alt="no img found" />
          </figure>
          {/* for overlay  */}
          {isOverlayOpen &&
            <div className="overlay"  >
              <div className="backdrop" onClick={closeOverlay} ></div>
              {/* <img src={detail.img && detail.img[imgIndex]} alt="no img found" className="overlay-img" /> */}
              <div className=" h-50 w-50 d-flex justify-content-center align-items-center" >
                <Carousel
                  indicators={false}
                >
                  {(detail.img).map((img, index) => (
                    <Carousel.Item key={index}>
                      <figure className="carousel-img-wrapper mb-0">
                        <img src={img} alt="no img found" className="overlay-img" />
                      </figure>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

            </div>
          }

          <div className="row ">
            {(detail.img) && (detail.img).map((img, index) => (
              <div className="col-6 col-sm-3 my-1 " key={index} onClick={() => showimage(index)}>
                <figure className={`small-img-wrapper mb-0 ${index === imgIndex ? "selected" : ''}
                `}>
                  <img src={img} alt="no-image found" />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-5 pb-5">
          <div className=" pt-2  ">
            <h3 className="p-2 pb-2">  {detail.name}</h3>
            <p className="p-2 pb-2">  ₹ {detail.price}</p>
            <p className=" description-text mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora est corporis cum asperiores officiis incidunt rerum veniam praesentium dolores atque ullam, cumque quam ipsam tenetur!</p>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button className="detail-btn " onClick={cartDataHandler}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailPage;
