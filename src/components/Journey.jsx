import React from "react";
import JourneyDoctor from "../assets/images/journeydoct.png";
import "./Journey.css";
import Patient1 from "../assets/images/profile1.png";
import Patient2 from "../assets/images/profile2.png";
import Patient3 from "../assets/images/profile3.png";
import BlueTick from "../assets/images/tick.svg";

const Journey = () => {
  return (
    <section className="section1">
      <div className="journey-container">
        <div className="doctor-container">
          <div className="image-wrapper">
            <img src={JourneyDoctor} alt="Doctor" className="floating-image" />
            <div className="yellow-container"></div>
            {/* <div className="main-total-patient"> */}
              <div className="same-patient-total-count">
                  <div className="same-patient-count">

                  <div className="same-patient-photos">
                    <img src={Patient1} />
                    <img src={Patient2} />
                    <img src={Patient3} />
                  </div>
                  <div className="same-total-patients">
                    <div className="same-total-count-patients">
                      <h3>50K+</h3>
                      <p>Patient Recover</p>
                    </div>
                    <div className="same-tick-div">
                      <img src={BlueTick} />
                    </div>
                  </div>
                </div>
                
              </div>
            {/* </div> */}
          </div>
        </div>

        <div className="journey-content">
          <h4> Welcome to South City Himal Hospital</h4>
          <h1>
            Your Journey
            <br />
            to Better Health Starts Here
          </h1>
          <p>
            The history of hospital service in Nepal starts in the year 1889
            with the establishment of Bir Hospital, the oldest hospital now
            providing general care to tertiary care to the people of Nepal. Bir
            hospital is the first teaching hospital for compounders, dresser and
            later nurses. For the same reason the first medical school called
            Civil Medical School was established in 1933 AD in Bir Hospital. It
            was also the centre for the training of FRCS, MRCP and MRCOG since
            1987. Therefore Bir Hospital has been a postgraduate Training centre
            from the beginning. In 1979 super-specialization medical services
            was expanded in this hospital.
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
