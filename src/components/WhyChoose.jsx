import React from "react";
import "./WhyChoose.css";
import HalfCircle from "../assets/images/half-circle.png";
import DoctorGroup from "../assets/images/doctorgroup.png";
import Safety from "../assets/images/safety.svg";

const WhyChoose = () => {
  return (
    <section className="section4">
      <div className="choose-us-container">
        <div className="choose-us-content">
          <div className="choose-us-title">
            <h1>Why Choose Us?</h1>
            <p>
              The history of hospital service in Nepal starts in the year 1889
              with the establishment of South himal Hospital, the oldest
              hospital now providing general care to tertiary care to the people
              of Nepal. South himal hospital is the first teaching hospital for
              compounders, dresser and later nurses.
            </p>
          </div>
          <div className="choose-us-image">
            <img src={HalfCircle} className="half-circle"></img>
          </div>
        </div>
        <div className="choose-image-wrapper">
          <div className="quality-content">
            <div className="quality-content1">
              <img src={Safety}></img>
              <h4>
                Quality
                <br />
                Safety First
              </h4>
            </div>

            <div className="quality-content1">
              <img src={Safety}></img>
              <h4>
                Quality
                <br />
                Safety First
              </h4>
            </div>

            <div className="quality-content1">
              <img src={Safety}></img>
              <h4>
                Quality
                <br />
                Safety First
              </h4>
            </div>

            <div className="quality-content1">
              <img src={Safety}></img>
              <h4>
                Quality
                <br />
                Safety First
              </h4>
            </div>

            <div className="quality-content1">
              <img src={Safety} alt="Safety"></img>
              <h4>
                Quality
                <br />
                Safety First
              </h4>
            </div>
          </div>
          <img src={DoctorGroup} alt="DoctorGroup" className="doctor-group"></img>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
