import React, { useState } from "react";

const Dropdown = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const categories = {
    Electronics: [
      "Desktop",
      "Laptop",
      "Camera",
      "Tablet",
      "Headphone",
      "headphone collection",
    ],
    "Men's": [
      "Formal",
      "Casual",
      "Sports",
      "Jacket",
      "Sunglasses",
      "men's fashion",
    ],
    "Women's": [
      "Formal",
      "Casual",
      "Perfume",
      "Cosmetics",
      "Bags",
      "women's fashion",
    ],
  };

  const mens = ["Shirt", "Shorts & Jeans", "Safety Shoes", "Wallet"];

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {title}
      {isHovered && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "pink",
            border: "1px solid #ccc",
            padding: "10px",
            zIndex: 1000,
            width: "200px",
          }}
        >
          {Object.entries(categories).map(([category, items], index) => (
            <li key={index}>
              <h4>{category}</h4>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
