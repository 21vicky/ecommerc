import React from "react";
import "./testimonial.css";
import TestimonialContent1 from "./TestimonialContent/TestimonialContent1";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { BsRocketTakeoff } from "react-icons/bs";
import { IoArrowUndoSharp } from "react-icons/io5";
import Rotate from "react-reveal/Rotate";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Amelia",
      content1: "CEO & Founder Invision quotation ",
      content2:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.",
      img: "https://www.cheatsheet.com/wp-content/uploads/2022/08/Persuasion-Dakota-Johnson.jpg?w=1200",
    },
  ];

  return (
    <div className="container testimonial-team-members" id="team">
      <div>
        <h5 className="testimonial-title-name">
          <b>
            Testimonial
            <span className="testimonial-line"></span>
          </b>
        </h5>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Rotate bottom right>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card team-members-item">
                <img
                  className={
                    index == 0 ? "card teammembrs-content" : "teammembrs-card"
                  }
                  src={item.img}
                  alt="team image"
                />
                <div className="team-info">
                  <h4 className="testimonial-quotation-name">
                    <b>{item.name}</b>
                  </h4>
                  <h6 className="testimonial-quotation-content1">
                    {item.content1}
                  </h6>
                  <h4 className="testimonial-quotation-symble">
                    <b>''</b>
                  </h4>
                  <h6 className="testimonial-quotation-content2">
                    {item.content2}
                  </h6>
                </div>
                <span className="line-for-teammembrs"></span>
                <div className="team-social-icons">
                  <p>
                    <FaFacebookF size={25} />
                  </p>
                  <p>
                    <FaTwitter size={25} />
                  </p>
                  <p>
                    <FaLinkedinIn size={25} />
                  </p>
                </div>
              </div>
            </div>
          </Rotate>
        ))}
      </div>
      <div className="testimonial-discount">
        <div>
          <p className="testimonial-discount-notice">
            <h6 className="testimonial-discount-notice-offers">25% DISCOUNT</h6>
            <h4 className="testimonial-discount-notice-name">
              <b>Summer</b>
            </h4>
            <h4 className="testimonial-discount-notice-name">
              <b>Collection</b>
            </h4>
            <h6 className="testimonial-discount-notice-starting">
              Starting @ $10
            </h6>
            <h6 className="testimonial-discount-notice-shopnow">
              <b>SHOP NOW</b>
            </h6>
          </p>
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/cta-banner.jpg"
            alt="Discount-image"
            className="testimonial-discount-image"
          />
        </div>
      </div>
      <div className="ourservices">
        <div className="ourservices-bor">
          <h5 className="ourservices-title-name">
            <b>Our Services</b>
          </h5>
          <span className="ourservices-line"></span>
        </div>
        <div className="ourservices-full-bp">
          <div className="ourservices-item-list1">
            <div className="row">
              <div className="team-info">
                <p className="ourservices-item-list-logo">
                  <MdOutlineDirectionsBoatFilled />
                </p>
                <h6 className="ourservices-quotation-content1">
                  <b>Worldwide Delivery</b>
                </h6>

                <p className="ourservices-quotation-content2">
                  For Order Over $100
                </p>
              </div>
              <span className="line-for-ourservices"></span>
            </div>
          </div>
          <div className="ourservices-item-list2">
            <div className="row">
              <div className="team-info">
                <p className="ourservices-item-list-logo">
                  <BsRocketTakeoff />
                </p>
                <h6 className="ourservices-quotation-content1">
                  <b>Next Day Delivery</b>
                </h6>

                <p className="ourservices-quotation-content2">UK Orders Only</p>
              </div>
              <span className="line-for-ourservices"></span>
            </div>
            <div className="ourservices-item-list3">
              <div className="row">
                <div className="team-info">
                  <p className="ourservices-item-list-logo">
                    <FaPhoneAlt />
                  </p>
                  <h6 className="ourservices-quotation-content1">
                    <b>Best Online Support</b>
                  </h6>

                  <p className="ourservices-quotation-content2">
                    Hours: 8AM - 11PM
                  </p>
                </div>
                <span className="line-for-ourservices"></span>
              </div>
            </div>
            <div className="ourservices-item-list4">
              <div className="row">
                <div className="team-info">
                  <p className="ourservices-item-list-logo">
                    <IoArrowUndoSharp />
                  </p>
                  <h6 className="ourservices-quotation-content1">
                    <b>Return Policy</b>
                  </h6>

                  <p className="ourservices-quotation-content2">
                    Easy & Free Return
                  </p>
                </div>
                <span className="line-for-ourservices"></span>
              </div>
            </div>
            <div className="ourservices-item-list5">
              <div className="row">
                <div className="team-info">
                  <p className="ourservices-item-list-logo">
                    <GiTicket />
                  </p>
                  <h6 className="ourservices-quotation-content1">
                    <b>30% Money Back</b>
                  </h6>

                  <p className="ourservices-quotation-content2">
                    For Order Over $100
                  </p>
                </div>
                <span className="line-for-ourservices"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
