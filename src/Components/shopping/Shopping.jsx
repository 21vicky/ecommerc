import React from "react";
import shopping from "../images/logo.avif";
import ShoppingContent1 from "./ShoppingContent/ShoppingContent1";
import ShoppingContent2 from "./ShoppingContent/ShoppingContent2";
import ShoppingContent3 from "./ShoppingContent/ShoppingContent3";
import ShoppingContent4 from "./ShoppingContent/ShoppingContent4";
import { FcDeployment, FcSupport, FcBusinessman } from "react-icons/fc";
import Fade from "react-reveal/Fade";

const Shopping = () => {
  return (
    <div className="container shopping-section" id="shopping">
      <div className="row">
        <Fade className="left-row" left big>
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <div className="shopping-image">
              <ShoppingContent1 />
            </div>
          </div>
        </Fade>

        <Fade right big>
          <div className="col-xl-9 col-lg-6 col-md-12 col-sm-12">
            <div className="shopping-details">
              <div className="shopping-title">
                {/*<h3>New Arrivals</h3>
                <h3>Trending</h3>
  <h3>Top Rated</h3>*/}
                <span className="line">
                  <ShoppingContent2 />
                </span>
              </div>

              <div className="card-design">
                <div className="shopping-list-item">
                  <div className="shopping-details-icon">
                    <ShoppingContent3 />
                  </div>
                  <div className="shopping-details-icon">
                    {" "}
                    <ShoppingContent4 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Shopping;
