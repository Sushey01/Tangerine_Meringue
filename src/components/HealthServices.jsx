import React from "react";
import "./HealthServices.css";
import CardDoc1 from '../assets/images/card-doctr-1.png'
import CardDoc2 from '../assets/images/card-doctr-2.png'
import CardDoc3 from '../assets/images/card-doctr-3.png'
import CardDoc4 from '../assets/images/card-doctr-4.png'
import CardDoc5 from '../assets/images/card-doctr-5.png'
import CardDoc6 from '../assets/images/card-doctr-6.png'


const HealthServices = () => {
  return (
    <section className="health-section">
        <div className="health-title">
            <h1>We Provide Best Health Services</h1>
        </div>
    <div className="health-container">
      <div className="six-health-container">
        <div className="first-health-container">
          <div className="first-title">
            <h2>Radiology Services</h2>
          </div>
          <div className="first-content">
            <p>
              At South City Himal Hospital, our team of specialists is equipped
              to provide the most advanced medical care in a compassionate
              environment. We treat all kinds of patients from children to
              senior citizens in our advanced facilities withall.
            </p>
            <button className="first-button">Read More</button>
               <div className="first-image">
            <img src={CardDoc1}></img>
            </div>
          </div>
       
        </div>

        <div className="second-health-container">
          <div className="second-title">
            <h2>OT Services</h2>
          </div>
          <div className="second-content">
            <p>
              At South City Himal Hospital, our team of specialists is equipped
              to provide the most advanced medical care in a compassionate
              environment. We treat all kinds of patients from children to
              senior citizens in our advanced facilities withall.{" "}
            </p>
            <button className="second-button">Read More</button>
            <div className="second-image">
            <img src={CardDoc2}></img>
          </div>
          </div>
        </div>

        <div className="third-health-container">
          <div className="third-title">
            <h2>Pharmacy Services</h2>
          </div>
          <div className="third-content">
            <p>
              At South City Himal Hospital, our team of specialists is equipped
              to provide the most advanced medical care in a compassionate
              environment. We treat all kinds of patients from children to
              senior citizens in our advanced facilities withall.
            </p>
            <button className="third-button">Read More</button>
            <div className="third-image">
            <img src={CardDoc3}></img>
          </div>
          </div>
 
        </div>


         <div className="fourth-health-container">
          <div className="fourth-title">
            <h2>Physiotheraphy Services</h2>
          </div>
          <div className="fourth-content">
            <p>
              At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall.
            </p>
            <button className="fourth-button">Read More</button>
            <div className="fourth-image">
            <img src={CardDoc4}></img>
          </div>
          </div>
        </div>

         <div className="fifth-health-container">
          <div className="fifth-title">
            <h2>Pharmacy Services</h2>
          </div>
          <div className="fifth-content">
            <p>
              At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall.
            </p>
            <button className="fifth-button">Read More</button>
                      <div className="fifth-image">
            <img src={CardDoc5}></img>
          </div>
          </div>
        </div>

         <div className="sixth-health-container">
          <div className="sixth-title">
            <h2>Pharmacy Services</h2>
          </div>
          <div className="sixth-content">
            <p>
              At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall.
            </p>
            <button className="sixth-button">Read More</button>
            <div className="sixth-image">
            <img src={CardDoc6}></img>
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HealthServices;
