import React, { useState } from "react";
import Dropdown from "../Navbar/Dropdown";

const Test = () => {
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
    <nav>
      <ul>
        {menuItems.map((item, index) =>
          item === "CATEGORIES" ? (
            <Dropdown key={index} title={item} />
          ) : (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Test;
