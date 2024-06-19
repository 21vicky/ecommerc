import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Mens from "./Mens";
import Womens from "./Womens";
import Jewelry from "./Jewelry";
import Perfume from "./Perfume";
import "./dropdown.css";
import { Link } from "react-router-dom";
import Imgrefresher from "../images/NetNestMarket.png";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Header from "../Header/Header";

const Navbar = () => {
  const [data, setdata] = useState(false);
  const [menu, setmenu] = useState(false);

  const inputhandler = () => {
    setdata(!data);
  };

  const menuhandler = () => {
    setmenu(!menu);
  };
  const menuItems = [
    "HOME",
    "CATEGORIES",
    "MEN'S",
    "WOMEN'S",
    "JEWELRY",
    "PERFUME",
    "BLOG",
    "HOT OFFERS",
  ];

  return (
    <>
      <Header />
      <div>
        <div className="navbar_div">
          <hr className="hrtage"></hr>
          <div className={data ? "input_form" : "input_form_not"}>
            <input type="text" placeholder="Search here" />
            <SearchIcon className="Search_icon_input" />
            <CloseIcon onClick={inputhandler} className="close_icon" />
          </div>
          <div className={data ? "header" : ""}>
            <div className="navbar_main">
              <div>
                <div onClick={inputhandler}>
                  {" "}
                  <SearchIcon className="Search_icon" />{" "}
                </div>
                <MenuIcon onClick={menuhandler} className="menu_icon" />
              </div>
              <div>
                <img src={Imgrefresher} className="heading_logo" alt="" />
              </div>
              <div className="bad_search">
                <SearchIcon onClick={inputhandler} className="Search_icon2" />
                <PersonIcon className="bag_icon-1" />
                <FavoriteIcon className="bag_icon-1" />
                <LocalMallIcon className="bag_icon-1" />
              </div>
            </div>
            <hr></hr>
            <nav className="Nav_links">
              <ul className="navbar-list">
                <li className="navbar-item">HOME</li>
                <li className="navbar-item">
                  {" "}
                  <Dropdown title="CATEGORIES" />
                </li>

                <li className="navbar-item">
                  <Mens title={"MEN'S"} />
                </li>
                <li className="navbar-item">
                  <Womens title={"WOMEN'S"} />
                </li>
                <li className="navbar-item">
                  <Jewelry title={"JEWELRY"} />
                </li>
                <li className="navbar-item">
                  <Perfume title={"PERFUME"} />
                </li>
                <li className="navbar-item">BLOG</li>
                <li className="navbar-item">HOT OFFERS</li>
              </ul>
            </nav>
            {/*<div className="Nav_links">
              <Link to="/" className="link">
                <b>HOME</b>
              </Link>
              <Link to="" className="link">
                <b>CATEGORIES</b>
              </Link>

              {/*
              <Link to="/privacy" className="link">
                <b>MEN'S</b>
              </Link>
              <Link to="/loginform" className="link">
                <b>WOMEN'S</b>
              </Link>
              <Link to="/signup" className="link">
                <b>JEWELRY</b>
              </Link>
              <Link to="/signup" className="link">
                <b>PERFUME</b>
              </Link>
              <Link to="/signup" className="link">
                <b>BLOG</b>
              </Link>
              <Link to="/signup" className="link">
                <b>HOT OFFERS</b>
              </Link>
            </div>*/}
            {/**/}
            {/* <div className={menu ? "sidebar2" : "sidebar1"}>
              <Link to="/" className="sidebar_link">
                <b>HOME</b>
              </Link>
              <Link to="" className="sidebar_link">
                <b>CATEGORIES</b>
              </Link>
              <Link to="/privacy" className="sidebar_link">
                <b>MEN'S</b>
              </Link>
              <Link to="/loginform" className="sidebar_link">
                <b>WOMEN'S</b>
              </Link>
              <Link to="/signup" className="sidebar_link">
                <b>JEWELRY</b>
              </Link>
              <Link to="/signup" className="sidebar_link">
                <b>PERFUME</b>
              </Link>
              <Link to="/signup" className="sidebar_link">
                <b>BLOG</b>
              </Link>
              <Link to="/signup" className="sidebar_link">
                <b>HOT OFFERS</b>
              </Link>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
