import React, { useState } from "react";
import "../ShoppingContent/styles/shoppingcontent7.css";
import { FcOk } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";

const ShoppingContent7 = () => {
  const shoppingcontentservicedata = [
    {
      id: 1,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 2,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 3,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
  ];

  const colors = ["#0000FF", "#FFAC1C", "#EE4B2B"];

  const [showClothes, setShowClothes] = useState(false);

  const handleClick = () => {
    setShowClothes(!showClothes);
  };

  return (
    <div className="container shoppingcontent-service-section" id="service">
      {/* Section title */}
      <div className="card shoppingcontent-section_title"></div>
      <div className="column">
        {shoppingcontentservicedata.map((item, index) => (
          <Zoom top>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12" key={index}>
              <div className="shoppingcontent-services">
                <span
                  className="shoppingcontent-service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  <p>{item.id}</p>
                </span>
                <div className="shoppingcontent-list-of-service">
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </p>
                  <samp className="shoppingcontent-service_item_underline"></samp>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service2}
                  </p>
                  <samp className="shoppingcontent-service_item_underline"></samp>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service3}
                  </p>
                  <samp className="shoppingcontent-service_item_underline"></samp>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service4}
                  </p>
                </div>
                <div />
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default ShoppingContent7;
