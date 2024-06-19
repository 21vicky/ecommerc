import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav_div">
      <div className="bad_search">
        <FacebookIcon className="bag_icon" />
        <InstagramIcon className="bag_icon" />
        <XIcon className="bag_icon" />
        <LinkedInIcon className="bag_icon" />
      </div>
      <h3 className="nav">Free shipping on orders ₹5,499+</h3>
      <div></div>
    </div>
  );
};

export default Header;
