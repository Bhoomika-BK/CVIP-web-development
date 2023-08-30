import React from "react";
import "./HomeCards.css";
import { Link } from "react-router-dom";
function Homecards({ image, name }) {
  return (
    <div className="cards">
      <div className="cards__top">
        <img src={image} alt="" />
      </div>
      <div className="cards__bottom">
        <div className="cards__up">
          <h3>{name}</h3>
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "10px",
           
          }}
        ></p>
      </div>
    </div>
  );
}

export default Homecards;
