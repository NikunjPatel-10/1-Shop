import React from "react";
import { IconUsersGroup, IconBuildingCastle, IconWorld, IconBuildingSkyscraper } from '@tabler/icons-react';
import clothShop from './../assets/images/clothShop.jpg';

const About = () => {
  return (
    <div className="h-100 mt-4">
      <div className="about-us-wrapper">
        <div className="row">
          <div className="col-12 col-md-7 p-4">
            <h3 className="">Our Story</h3>
            <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non...</p>
            <p className="description-text">Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales...</p>
            <p className="description-text">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
          <div className="col-12 col-md-5 gx-0 mt-4">
            <figure className="about-us-img-wrapper mb-0 w-100">
              <img src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg.webp" alt="About Us" />
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 gx-0 mt-4">
            <figure className="about-us-img-wrapper mb-0 w-100">
              <img src="https://preview.colorlib.com/theme/cozastore/images/about-02.jpg.webp" alt="Our Mission" />
            </figure>
          </div>
          <div className="col-12 col-md-7 p-4">
            <h3 className="">Our Mission</h3>
            <p className="description-text">Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat...</p>
            <div className="ps-3">
              <p className="description-text">Creativity is just connecting things...</p>
              <h5 className="description-text">- Steve Job’s</h5>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 col-sm-6 col-md-3 my-2">
            <div className="d-flex p-3 w-100 border rounded">
              <IconUsersGroup height={50} width={50} />
              <div className="d-flex flex-column ms-3">
                <span>Total Guests</span>
                <span>200000000+</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 my-2">
            <div className="d-flex p-3 border rounded">
              <IconBuildingSkyscraper height={50} width={50} />
              <div className="d-flex flex-column ms-3">
                <span>Cities</span>
                <span>65 000+</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 my-2">
            <div className="d-flex p-3 border rounded">
              <IconBuildingCastle height={50} width={50} />
              <div className="d-flex flex-column ms-3">
                <span>Castles</span>
                <span>1400+</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 my-2">
            <div className="d-flex p-3 border rounded">
              <IconWorld height={50} width={50} />
              <div className="d-flex flex-column ms-3">
                <span>Countries</span>
                <span>191+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
