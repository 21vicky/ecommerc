import React from "react";
import "./ourservices.css";

import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Rotate from "react-reveal/Rotate";

const OurServices = () => {
  const data = [
    {
      id: 1,
      name: "Fashion",
      content: "Clothes Retail KPIs 2021 Guide for Clothes Executives.",
      content1: "By Mr Admin / Apr 06, 2022",
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-1.jpg",
    },
    {
      id: 2,
      name: "Clothes",
      content: "Curbside fashion Trends: How to Win the Pickup Battle.",
      content1: "By Mr Robin / Jan 18, 2022",
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-2.jpg",
    },
    {
      id: 3,
      name: "Shoes",
      content: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
      content1: "By Mr Selsa / Feb 10, 2022",
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-3.jpg",
    },
    {
      id: 4,
      name: "Electronics",
      content: "Curbside fashion Trends: How to Win the Pickup Battle.",
      content1: "By Mr Pawar / Mar 15, 2022",
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-4.jpg",
    },
  ];
  return (
    <div className="container ourservicerlist-members" id="team">
      <div className="row">
        {data.map((item, index) => (
          <Rotate bottom right>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card ourservicerlist-members-item">
                <img src={item.img} alt="team image" />
                <div className="team-info">
                  <h6 className="ourservicerlist-members-item-name">
                    {item.name}
                  </h6>
                  <p className="ourservicerlist-members-item-content">
                    <b>{item.content}</b>
                  </p>
                </div>
                <span className="line-for-ourservicerlist"></span>
                <div className="ourservicerlist-social-icon">
                  <p className="ourservicerlist-members-item-date">
                    {item.content1}
                  </p>
                </div>
              </div>
            </div>
          </Rotate>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
