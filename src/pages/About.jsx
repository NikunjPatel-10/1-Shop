import React from "react";
import { IconUsersGroup, IconBuildingCastle, IconWorld, IconBuildingSkyscraper } from '@tabler/icons-react';
import clothShop from './../assets/images/clothShop.jpg'

const About = () => {
  return (
    <div className="h-100 mt-4">
      <div className="about-us-wrapper ">
        <div className="row">

          <div className="col-12 col-sm-6 p-4">
            <h1 className="text-center">Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod natus ab optio aspernatur ea porro accusantium asperiores dolores cupiditate quidem officia mollitia vero nesciunt saepe id possimus aperiam omnis fuga odit neque, corrupti rem. Numquam culpa molestiae modi recusandae, sint illo? Doloribus perferendis aliquid ut cumque ea impedit placeat!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus distinctio quos expedita cupiditate magni. Voluptatem officia quo, ipsum eos suscipit error earum doloremque perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia culpa, ullam magnam, sed, vero cumque omnis excepturi reprehenderit consequuntur fugiat voluptatibus. Veniam, magnam animi!</p>
          </div>
          <div className="col-12 col-sm-6 gx-0 p-2">
            <figure className="about-us-img-wrapper mb-0 w-100">
              <img src={clothShop} />
            </figure>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 col-sm-6 my-2">
            <div className="d-flex p-3 w-100 border rounded">
              <div>
                <IconUsersGroup height={50} width={50} />
              </div>
              <div className="d-flex flex-column ms-3 ">
                <span>Total Guests</span>
                <span>200000000+</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 my-2">
            <div className="d-flex p-3 border rounded">
              <div>
                <IconBuildingSkyscraper height={50} width={50} />
              </div>
              <div className="d-flex flex-column ms-3">
                <span>Cities</span>
                <span>65 000+</span>
              </div>

            </div>
          </div>
          <div className="col-12 col-sm-6 my-2">
            <div className="d-flex p-3 border rounded">
              <div>
                <IconBuildingCastle height={50} width={50} />
              </div>
              <div className="d-flex flex-column ms-3">
                <span>Castles</span>
                <span>1400+</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 my-2">
            <div className="d-flex p-3 border rounded">
              <div>
                <IconWorld height={50} width={50} />
              </div>
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
