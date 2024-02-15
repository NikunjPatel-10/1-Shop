import React from "react";
import { IconUsersGroup, IconBuildingCastle, IconWorld, IconBuildingSkyscraper } from '@tabler/icons-react';
import clothShop from './../assets/images/clothShop.jpg'

const About = () => {
  return (
    <div className="h-100 mt-4">
      <div className="about-us-wrapper ">
        <div className="row">

          <div className="col-12 col-sm-7 p-4">
            <h3 className="">Our Story</h3>
            <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
            <p className="description-text">Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
            <p className="description-text">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
          <div className="col-12 col-sm-5 gx-0  mt-4">
            <figure className="about-us-img-wrapper mb-0 w-100">
              <img src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg.webp" />
            </figure>
          </div>
        </div>
        <div className="row">

          <div className="col-12 col-sm-5 gx-0  mt-4">
            <figure className="about-us-img-wrapper mb-0 w-100">
              <img src="https://preview.colorlib.com/theme/cozastore/images/about-02.jpg.webp" />
            </figure>
          </div>
          <div className="col-12 col-sm-7 p-4">
            <h3 className="">Our Mission</h3>
            <p className="description-text">Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
            <div className="ps-3">
              <p className="description-text">Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
              <h5 className="description-text">- Steve Job’s</h5>
            </div>
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
