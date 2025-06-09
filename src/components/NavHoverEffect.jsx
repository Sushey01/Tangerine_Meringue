import React from "react";
import "./NavHoverEffect.css";

const NavHoverEffect = () => {
  return (
    <>
      <div className="nav-hover">
        <a href="#" className="active main">
          Home
        </a>
      </div>

      <li
        className="drop"
        style={{
          listStyle: "none",
          position: "relative",
          display: "inline-block",
        }}
      >
        <div className="nav-hover-other">
          <a href="#" className="main">About Us</a>
          <div className="dropdown">
            <ul>
              <div className="drop1">
                <a href="#">Overview</a>
              </div>
              <div className="second-dropdown">
                <a href="#">
                  Mission and Vision
                </a>

                <ul className="second-dropdown-hover">
                  <li>Mission</li>
                  <li>Vision</li>
                </ul>
              </div>
              <div className="drop1">
                <a href="#">Core Values</a>
              </div>

               <div className="drop1">
                <a href="#">Chairman's Message</a>
              </div>
              
              <div className="drop1">
                <a href="#">Executive Committee</a>
              </div>

            </ul>
          </div>
        </div>
      </li>

      <a href="#">Services</a>
      <a href="#">Doctors</a>
      <a href="#">Department</a>
      <a href="#">Career</a>
      <a href="#">Media</a>
      <a href="#">Our Schedules</a>
      <a href="#">Packages</a>
    </>
  );
};

export default NavHoverEffect;
