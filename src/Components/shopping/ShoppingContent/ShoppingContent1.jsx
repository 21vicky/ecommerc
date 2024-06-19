import React, { useState } from "react";
import "../ShoppingContent/styles/shoppingcontent1.css";
import Zoom from "react-reveal/Zoom";

const imagesphoto = [
  {
    img: "https://www.shutterstock.com/image-photo/man-without-head-isolated-on-600nw-149343938.jpg",
    name: "Clothes",
  },
  {
    img: "https://danhaive.com/assets/img/05_shoe1.png",
    name: "Footwear",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG-File.png",
    name: "Jewelry",
  },
  {
    img: "https://www.thesun.co.uk/wp-content/uploads/2016/06/nintchdbpict000246877685.jpg",
    name: "Perfume",
  },
  {
    img: "https://t4.ftcdn.net/jpg/02/91/74/87/360_F_291748700_owTB4oJPkTTYe5IagHMtMsptzpB68jSm.jpg",
    name: "Cosmetics",
  },
  {
    img: "https://media.visio-net.co.uk/oscommerce/images/viewerxxl_new/hugo-boss-HG1200-7C5-59P02.jpg",
    name: "Glasses",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71aiZ11YQ2L._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg",
    name: "Bags",
  },
];

const data = {
  Clothes: {
    Shirt: 300,
    "Shorts & Jeans": 60,
    Jacket: 50,
    "Dress & Frock": 87,
  },
  Footwear: {
    Sports: 45,
    Formal: 75,
    Casual: 35,
    "Safety Shoes": 26,
  },
  Jewelry: {
    Earrings: 46,
    "Couple Rings": 73,
    Necklace: 61,
  },
  Perfume: {
    "Clothes Perfume": "12 pcs",
    Deodorant: "60 pcs",
    Jacket: "50 pcs",
    "Dress & Frock": "87 pcs",
  },
  Cosmetics: {
    Shampoo: 68,
    Sunscreen: 46,
    "Body Wash": 79,
    "Makeup Kit": 23,
  },
  Glasses: {
    Sunglasses: 50,
    Lenses: 48,
  },
  Bags: {
    "Shopping Bag": 62,
    "Gym Backpack": 35,
    Purse: 80,
    Wallet: 75,
  },
};
const bsstsellers = [
  {
    img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/1.jpg",
    service1: "Baby Fabric Shoes",
    service2: "Clothes",
    service3: "₹1,000.00",
    service4: "₹1,500.00",
  },
  {
    img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/2.jpg",
    service1: "Men's Hoodies T-Shirt",
    service2: "Clothes",
    service3: "₹1800.00",
    service4: "₹2,300.00",
  },
  {
    img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/3.jpg",
    service1: "Girls T-Shirt",
    service2: "Clothes",
    service3: "₹1,000.00",
    service4: "₹1,400.00",
  },
  {
    img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/4.jpg",
    service1: "Woolen Hat For Men",
    service2: "Clothes",
    service3: "₹600.00",
    service4: "₹1,000.00",
  },
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
const Category = ({ img, name, items, isVisible, onClick }) => {
  return (
    <div className="moon">
      <img src={img} alt={`${name} icon`} className="shoppinng-center-image" />
      <h6 className="shoppinng-name-icon" onClick={() => onClick(name)}>
        <b>{name}</b>
      </h6>
      <ul className={`shoppinng-unorder-icon ${isVisible ? "expanded" : ""}`}>
        {Object.entries(items).map(([itemName, quantity]) => (
          <li className="shoppinng-order-icon" key={itemName}>
            {itemName} ({quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

const ShoppingContent1 = () => {
  const [visibleCategory, setVisibleCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setVisibleCategory(visibleCategory === category ? null : category);
  };

  return (
    <div>
      <div className="card shoppinng-boder">
        <h6 className="shoppinng-header">
          <b>CATEGORY</b>
        </h6>
        {imagesphoto.map((item) => (
          <Category
            key={item.name}
            img={item.img}
            name={item.name}
            items={data[item.name]}
            isVisible={visibleCategory === item.name}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      <div className="container shoppingcontent1-section" id="service">
        {/* Section title */}

        <div className="card section_title">
          <span className="shoppingcontent1-header-item1">
            <h5>
              <b>BEST SELLERS</b>
              <samp className="shoppingcontent1_underline1"></samp>
            </h5>
          </span>
        </div>

        <div className="row">
          {bsstsellers.map((item, index) => (
            <Zoom top>
              <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12" key={index}>
                <div className="shoppingcontent1-services" key={index}>
                  <div class="shoppingcontent1-number">
                    <img
                      src={item.img}
                      alt="slider image"
                      className="shoppingcontent1-number"
                      width={30}
                    />

                    <h6 className="shoppingcontent1-name-list-service">
                      <b>{item.service1}</b>
                    </h6>
                    <p className="shoppingcontent1-type-name">
                      {item.service2}
                    </p>
                  </div>
                  <p className="shoppingcontent1-list-amount">
                    <b>{item.service3}</b>
                    <del className="offers-amount-shoppingcontent1">
                      {item.service4}
                    </del>
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
    </div>
  );
};

export default ShoppingContent1;
