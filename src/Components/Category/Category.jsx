import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.css";
import Zoom from "react-reveal/Zoom";

const Category = () => {
  const data = [
    {
      img: "https://assets.vogue.com/photos/62e2e51ef6fb1caf303a747f/1:1/w_2667,h_2667,c_limit/slide_20.jpg",
      content: "DRESS & FROCK",
      position: "(53)",
      name: "Show All",
    },
    {
      img: "https://s.alicdn.com/@sc04/kf/H85fb5fff0a4d43be998f599d044d9e33u.jpg_200x200.jpg",
      content: "WINTER WEAR",
      position: "(58)",
      name: "Show All",
    },
    {
      img: "https://www.koalaeye.com/cdn/shop/articles/sunglasses_720x_9b7f59a3-65b2-478e-9216-c20067afc21c-582851.jpg?v=1648237013",
      content: "GLASSES & LENS",
      position: "(68)",
      name: "Show All",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20210305/eoLD/604249d3f997dd5c400729f9/-473Wx593H-460809771-blue-MODEL4.jpg",
      content: "SHORTS & JEANS",
      position: "(84)",
      name: "Show All",
    },
    {
      img: "https://i.etsystatic.com/45771220/r/il/1143c7/5415018375/il_fullxfull.5415018375_j4gc.jpg",
      content: "T-SHIRTS",
      position: "(35)",
      name: "Show All",
    },
    {
      img: "https://sly010.com/app/uploads/2022/06/22393BLZ2198-166-1-650x800.jpg",
      content: "JACKET",
      position: "(29)",
      name: "Show All",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzEpIh1-pDKyNcr26N2X2j_hX7ULfP5w23ihlvgnQe9T9ChVZzjEUZP_4TA_MBClic0E&usqp=CAU",
      content: "WATCH",
      position: "(16)",
      name: "Show All",
    },
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/k/d/7/-original-imagnggpwh8znjz9.jpeg?q=90&crop=false",
      content: "HAT & CAPS",
      position: "(31)",
      name: "Show All",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="category-slider-container" id="category">
      <div className="category-section_title">
        <span className="line"></span>
      </div>

      <div className="category-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="category-content-slider" key={index}>
                  <div class="category-content-flex">
                    <img
                      src={item.img}
                      alt="slider image"
                      className="category-center-image"
                      width={30}
                    />

                    <h6 className="category-item-title">
                      <b>{item.content}</b>
                    </h6>
                    <p className="category-btn">{item.position}</p>
                  </div>
                  <p className="category-item-amount">{item.name}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
