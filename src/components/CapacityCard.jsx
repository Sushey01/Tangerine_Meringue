import React from "react";
import "./CapacityCard.css";
import Capacity from "../assets/images/capacity.svg";

const CapacityCard = ({ image, title }) => {
  return (
    <div className="capacity-main-box">
      <div className="capacity-box">
        <img src={image} alt={title} />
        <div className="capacity-content">
          <p>25</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CapacityCard;
