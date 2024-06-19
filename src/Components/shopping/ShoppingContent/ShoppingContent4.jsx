import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import "../ShoppingContent/styles/shoppingcontent4.css";

const ShoppingContent4 = () => {
  const data = [
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-4.jpg",
      content: "JACKET",
      itemdetials: "Mens Winter Leathers Jackets",
      cost1: "₹2,500.00",
      cost2: "₹4,100.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-2.jpg",
      content: "SHIRT",
      itemdetials: "Pure Garment Dyed Cotton Shirt",
      cost1: "₹1,700.00",
      cost2: "₹2,499.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-6.jpg",
      content: "Jacket",
      itemdetials: "MEN Yarn Fleece Full-Zip Jacket",
      cost1: "₹5,999.00",
      cost2: "₹8,599.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-4.jpg",
      content: "skirt",
      itemdetials: "Black Floral Wrap Midi Skirt",
      cost1: "₹2,000.00",
      cost2: "₹3,200.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2_1.jpg",
      content: "casual",
      itemdetials: "Casual Men's Brown shoes",
      cost1: "₹2,200.00",
      cost2: "₹4,300.00",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDiGe5mM1UpcuwrnESeN0ygGef6NOv7JWcYjCdlSCm0bnRWFEp",
      content: "JACKET",
      itemdetials: "Mens Fashion Casual Coat Business",
      cost1: "₹7,849.00",
      cost2: "₹9,999.00",
    },
    {
      img: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
      content: "watches",
      itemdetials: "Pocket Watch Leather Pouch",
      cost1: "₹2,700.00",
      cost2: "₹4,300.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-2.jpg",
      content: "watches",
      itemdetials: "Smart watche Vital Plus",
      cost1: "₹5,200.00",
      cost2: "₹7,500.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-2.jpg",
      content: "party wear",
      itemdetials: "Womens Party Wear Shoes",
      cost1: "₹3,200.00",
      cost2: "₹5,300.00",
    },

    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-4.jpg",
      content: "sports",
      itemdetials: "Trekking & Running Shoes - black",
      cost1: "₹3,499.00",
      cost2: "₹4,200.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-1_1.jpg",
      content: "formal",
      itemdetials: "Men's Leather Formal Wear shoes",
      cost1: "₹1,700.00",
      cost2: "₹4,100.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shorts-2.jpg",
      content: "shorts",
      itemdetials: "Better Basics French Terry Sweatshorts",
      cost1: "₹1,250.00",
      cost2: "₹3,675.00",
    },

    {
      img: "https://encrypted.google.com/images?q=tbn:EW-awqvoHP49uM",
      content: "JACKET",
      itemdetials: "Blazers for Women Fuchsia Trenchcoats",
      cost1: "₹7,200.00",
      cost2: "₹9,990.00",
    },
    {
      img: "https://encrypted.google.com/images?q=tbn:wcfRiKzlomgfwM",
      content: "Mini Dress",
      itemdetials: "Emerald Green Floral Flare Mini Dress",
      cost1: "₹2,600.00",
      cost2: "₹3,750.00",
    },
    {
      img: "https://encrypted.google.com/images?q=tbn:wrolljWgWB-LkM",
      content: "Party Dress",
      itemdetials: "Women One Shoulder Sparkly Evening Gown",
      cost1: "₹5,499.00",
      cost2: "₹7,500.00",
    },
    {
      img: "https://encrypted.google.com/images?q=tbn:_5-aJLckVX2G4M",
      content: "JACKET",
      itemdetials: "Double Breasted Mini Blazer Blue Dress",
      cost1: "₹7,449.00",
      cost2: "₹9,990.00",
    },
    {
      img: "https://encrypted.google.com/images?q=tbn:Ca0NnLe0st0AWM",
      content: "Party Dress",
      itemdetials: "Ball Gown Print Shinny Mesh Tulle",
      cost1: "₹2,990.00",
      cost2: "₹3,499.00",
    },
    {
      img: "https://editorialist.com/webcompressed/2021/4/014/125/284/14125284~blanc%20optique_0.jpg",
      content: "Sandals",
      itemdetials: "Saint Laurent Pearl-embellished",
      cost1: "₹2,748.00",
      cost2: "₹4,700.00",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4l24qGfx9C9Sp5g0FduwHc_MVCi0sBFo-gIrFx1kq1R2xib1-",
      content: "Bag",
      itemdetials: "Raindrop Crossbody Bag - Deep Water",
      cost1: "₹4,600.00",
      cost2: "₹7,800.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-2.jpg",
      content: "JACKET",
      itemdetials: "Mens Winter Leathers Jackets",
      cost1: "₹3,000.00",
      cost2: "₹5,200.00",
    },
  ];
  const [showMorePost, setShowMorePost] = useState(12);
  const loadmore = () => {
    setShowMorePost((prev) => prev + 4);
  };
  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="newproducts-title">
        <h5>
          <b>New Products</b>
        </h5>
        <samp className="newproducts-line"></samp>
      </div>
      <div className="row">
        {data.slice(0, showMorePost).map((item, index) => (
          <Fade right>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={index == 0 ? "marked-content-card" : "content-card"}
              >
                <img
                  className="newproducts-image"
                  src={item.img}
                  alt="image"
                ></img>
                <p className="newproducts-content">
                  <b>{item.content}</b>
                </p>
                <p>
                  <samp className="card newproducts-itemdetials">
                    {item.itemdetials}
                  </samp>
                </p>
                <p className="newproducts-cost1">
                  <b>{item.cost1}</b>
                </p>
                <del className="newproducts-cost2">{item.cost2}</del>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      {showMorePost >= data.length ? null : (
        <Bounce>
          <span className="load-more-button" onClick={loadmore}>
            <b>Load More</b>
          </span>
        </Bounce>
      )}
    </div>
  );
};

export default ShoppingContent4;
