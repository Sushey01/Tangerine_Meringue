import React from "react";
import "./Schedule.css";
import AppointBg from "../assets/images/appointBg.png";
import AppointmentDoctor from "../assets/images/appointment-doctr.png";

const Schedule = () => {
  return (
    <section className="section3">
      <div className="schdeule-container">
        <div className="schedule-content">
          <div className="schedule-content1">
            <h1>Schedule an imperson or virtual appointment today</h1>
            <button className="book-button">
                Book an Appointment</button>
          </div>

          <div className="schedule-image-wrapper">
            <img src={AppointmentDoctor} alt="AppointmentDoc" className="image-floating"></img>

            <div className="blue-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
