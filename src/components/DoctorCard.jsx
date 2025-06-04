import React from "react";
import './DoctorCard.css';

export default function DoctorCard({ name, image, info1, info2 }) {
  return (
    <div className="doctor-container">
      
      <div className="doctor-card">
        
        <div className="doctor-image">
          <img src={image}></img>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="first-hover-box"></div>
          <div className="second-hover-box"></div>
        </div>
        <div className="doctor-information">
          <h3>{name}</h3>
          <p>{info1}</p>
          <p>{info2}</p>
        </div>
      </div>
    </div>
  );
}
