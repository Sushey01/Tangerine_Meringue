import React from "react";
import "./HeroSection.css";
import Bannerdoctr from "../assets/bannerdoctr.png";
import Patient1 from "../assets/profile1.png";
import Patient2 from "../assets/profile2.png";
import Patient3 from "../assets/profile3.png";
import BlueTick from "../assets/tick.svg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="main-container">
        <div className="health-content">
          <h1>
            Health is a state of complete physical mental and social well-being
          </h1>
          <p>
            Hospital is always ready to provide the best health care service in
            accordance with the national standards and also ethical
            considerations.
          </p>
          <div className="hero-button">
            <button className="appointment-button">
              Book An Appointment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                color="white"
                class="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="doctor-image">
          <img src={Bannerdoctr} />
        </div>

        <div className="patient-total-count">
          <div className="patient-count">
            <div className="patient-photos">
              <img src={Patient1} />
              <img src={Patient2} />
              <img src={Patient3} />
            </div>
            <div className="total-patients">
              <div className="total-count-patients">
                <h3>50K+</h3>
                <p>Patient Recover</p>
              </div>
              <div className="tick-div">
                <img src={BlueTick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
