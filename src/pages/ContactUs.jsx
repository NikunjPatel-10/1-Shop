import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import {
  IconBrandInstagram,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandGoogle,
  IconHome2,
  IconPhoneCall,
  IconMailFilled,
} from "@tabler/icons-react";
import Map from "../components/Map";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container row">
        <div className="col-12 col-md-6 p-4">
          <div>
            <h2>1 SHOP</h2>
            <p>
              DailyShop Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Rerum modi dolor facilis! Nihil error, eius.
            </p>
            <div className="d-flex flex-column">
              <div className="mb-2 d-flex align-items-center">
                <IconHome2 className="me-2" /> <span>Huntsville, AL 35813, USA</span>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <IconPhoneCall className="me-2" /> <span>+ 021.343.7575</span>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <IconMailFilled className="me-2" /> <span>Email: support@dailyshop.com</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h2>Follow Us</h2>
            <div className="social-icons d-flex">
              <IconBrandFacebookFilled className="me-2" />
              <IconBrandTwitterFilled className="me-2" />
              <IconBrandInstagram className="me-2" />
              <IconBrandGoogle className="me-2" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-4">
          <form className="contact-form border rounded p-3" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <button type="submit" className="btn btn-secondary text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="map-container" style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyClKKb1cMAt1LmTuQKa8SZAr4k9JFg36IY" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Map
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default ContactUsPage;
