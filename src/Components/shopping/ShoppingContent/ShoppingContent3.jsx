import React from "react";
import "../ShoppingContent/styles/shoppingcontent3.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const ShoppingContent3 = () => {
  const data = [
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg",
      serv1: "SHAMPOO, CONDITIONER & FACEWASH PACKS",
      serv2:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
      serv3: "₹4,800.00",
      serv4: "₹7,500.00",
      serv5: "ALREADY SOLD: 20",
      serv6: "AVAILABLE: 40",
      serv7: "HURRY UP! OFFER ENDS IN:",
      serv8: "₹1,500.00",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-1.jpg",
      serv1: "ROSE GOLD DIAMONDS EARRING",
      serv2:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
      serv3: "₹8,000.00",
      serv4: "₹12,500.00",
      serv5: "ALREADY SOLD: 15",
      serv6: "AVAILABLE: 40",
      serv7: "HURRY UP! OFFER ENDS IN:",
      serv8: "₹1,500.00",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <div className="container-shoppingcont-slider" id="shoppingcont">
      <div className="shoppingcont-section_title">
        <h5>
          <b>Deal Of The Day</b>
        </h5>
        <span className="shopping-deal-underline1-line"></span>
      </div>

      <div className="shoppingcont-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
                key={index}
              >
                <div className="card shoppingcont-content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="slider image"
                    className="shoppingcont-center-image"
                    sizes={500}
                  />
                  <h6 className="shoppingcont-name-list-service">
                    <b>{item.serv1}</b>
                  </h6>
                  <p className="shoppingcont-type-name">{item.serv2}</p>
                  <p className="shoppingcont-list-amount">
                    <b>{item.service3}</b>
                    <del className="offers-amount-shoppingcont">
                      {item.serv4}
                    </del>
                  </p>
                  <p className="shoppingcont-type-name">{item.serv5}</p>
                  <p className="shoppingcont-type-name">{item.serv6}</p>
                  <p className="shoppingcont-type-name">{item.serv7}</p>

                  <p id="demo"></p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShoppingContent3;
