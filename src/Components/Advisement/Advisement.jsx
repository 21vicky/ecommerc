import React from "react";
import "./advisement.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Advisement = () => {
  const data = [
    {
      img: "https://velocityopticals.com/wp-content/uploads/2023/05/vo.png",
    },
    {
      img: "https://wopb.wpxpo.com/wp-content/uploads/2020/05/hero1.jpg",
    },

    {
      img: "https://demo4techies.com/magento/magetheme105/pub/media/wysiwyg/slider/shopkartlite-home-banner-1.png",
    },
    {
      img: "https://demo4techies.com/magento/magetheme105/pub/media/wysiwyg/slider/shopkartlite-home-banner-2.png",
    },
    {
      img: "https://proxsupplies.ca/cdn/shop/files/home-banner1.jpg?v=1676817104&width=3840",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-3.jpg",
    },
    {
      img: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-2.jpg",
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

  return (
    <div className="container-advisement-slider" id="advisement">
      <div className="advisement-section_title">
        <span className="line"></span>
      </div>

      <div className="advisement-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card advisemen-content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="slider image"
                    className="advisemen-center-image"
                    height={448.7}
                  />
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Advisement;
