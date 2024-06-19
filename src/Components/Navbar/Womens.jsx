import React, { useState } from "react";

const Womens = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const womens = {
    Earrings: [],
    "Dress & Frock": [],
    "Makeup Kit": [],
    Necklace: [],
  };

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
            width: "200px", // Adjusted width for better visibility
          }}
        >
          {Object.entries(womens).map(([womens, items], index) => (
            <li key={index}>
              <h4>{womens}</h4>
              <ul className="jret">
                {items.map((item, idx) => (
                  <li className="jesr" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Womens;
