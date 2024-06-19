import React from "react";
import "../ShoppingContent/styles/shoppingcontent2.css";
import { FcOk } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";

const ShoppingContent2 = () => {
  const servicedata = [
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg",
      service1: "Relaxed Short full Sleeve..",
      service2: "Clothes",
      service3: "₹800.00",
      service4: "₹1,500.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-1.jpg",
      service1: "Running & Trekking Shoes..",
      service2: "Sports",
      service3: "₹3,200.00",
      service4: "₹4,600.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-3.jpg",
      service1: "Pocket Watch Leather..",
      service2: "Watches",
      service3: "₹2,300.00",
      service4: "₹4,100.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-2.jpg",
      service1: "Girls pnk Embro design Top",
      service2: "Clothes",
      service3: "₹999.00",
      service4: "₹1,500.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-2.jpg",
      service1: "Trekking & Running Shoes..",
      service2: "Sports",
      service3: "₹3,000.00",
      service4: "₹6,500.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-3.jpg",
      service1: "Silver Deer Heart Necklace",
      service2: "Jewellery",
      service3: "₹2,100.00",
      service4: "₹4,700.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-3.jpg",
      service1: "Black Floral Wrap Midi Skirt",
      service2: "Clothes",
      service3: "₹2,700.00",
      service4: "₹4,300.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-1.jpg",
      service1: "Womens Party Wear Shoes",
      service2: "Party wear",
      service3: "₹3,500.00",
      service4: "₹7,800.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/perfume.jpg",
      service1: "Titan 100 Ml Womens..",
      service2: "Perfume",
      service3: "₹899.00",
      service4: "₹2,500.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-1.jpg",
      service1: "Pure Garment Dyed Cot..",
      service2: "Mens Fashion",
      service3: "₹2,500.00",
      service4: "₹5,600.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-3.jpg",
      service1: "Sports Claw Women's..",
      service2: "Sports",
      service3: "₹4,500.00",
      service4: "₹5,400.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/belt.jpg",
      service1: "Men's Leather Reversible..",
      service2: "Belt",
      service3: "₹999.00",
      service4: "₹2,000.00",
    },
  ];

  return (
    <div className="container service-section" id="service">
      {/* Section title */}

      <div className="card section_title">
        <span className="link-header-item1">
          <h5>
            <b>New Arrivals</b>{" "}
            <samp className="shoppinngitem_underline1"></samp>
          </h5>
        </span>

        <span className="link-header-item2">
          <h5>
            <b>Trending</b> <samp className="shoppinngitem_underline2"></samp>
          </h5>
        </span>
        <span className="link-header-item3">
          <h5>
            <b>Top Rated</b>
            <samp className="shoppinngitem_underline3"></samp>
          </h5>
        </span>
      </div>
      <div className="row">
        {servicedata.map((item, index) => (
          <Zoom top>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12" key={index}>
              <div className="services" key={index}>
                <div class="service-number">
                  <img
                    src={item.img}
                    alt="slider image"
                    className="service-number"
                    width={30}
                  />

                  <h6 className="category-name-list-service">
                    <b>{item.service1}</b>
                  </h6>
                  <p className="category-type-name">{item.service2}</p>
                </div>
                <p className="category-list-amount">
                  <b>{item.service3}</b>
                  <del className="offers-amount-catagory">{item.service4}</del>
                </p>
              </div>

              {/* <div className="services">
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  <p>{item.img}</p>
                </span>
                <div className="list-of-service">
                  <h6>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </h6>
                  <samp className="service_item_underline"></samp>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service2}
                  </p>
                  <samp className="service_item_underline"></samp>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service3}
                  </p>
                  <samp className="service_item_underline"></samp>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service4}
                  </p>
                </div>
                <div />
              </div>*/}
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default ShoppingContent2;
