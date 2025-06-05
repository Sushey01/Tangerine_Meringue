import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="section11">
      <div className="footer-container">
        <div className="four-footer-containers">
          <div className="quick-container">
            <h3>Quick Link</h3>
            <div className="quick-link-box">
              <p>Department</p>
              <p>Doctors</p>
              <p>Services</p>
              <p>News</p>
            </div>
          </div>
          <div className="footer-department-container">
            <h3>Our Departments</h3>
            <div className="two-depart-section">
              <div className="one-depart">
                <p>Anesthesiology</p>
                <p>Cardiology</p>
                <p>
                  Cardiovascular
                  <br />
                  Surgery
                </p>
                <p>ENT</p>
                <p>Anesthesiology</p>
                <p>Gastro-
                    <br/>
                    Enterologyst</p>
              </div>
              <div className="two-depart">
                <p>Gynsecology</p>
                <p>Hepatology</p>
                <p>Neurology</p>
                <p>Neurosurgery</p>
                <p>Pathology</p>
              </div>
            </div>
          </div>
        <div className="quick-container">
            <h3>Quick Link</h3>
            <div className="quick-link-box">
              <p>Department</p>
              <p>Doctors</p>
              <p>Services</p>
              <p>News</p>
            </div>
          </div>
        <div className="contact-container">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <p>Birgunj, Nepal</p>
              <p>southcityhimalhospital@gmail.com</p>
              <p>+977-9802593288</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <h3>Copyright © Dynamic Technosoft Pvt. Ltd. || 2019 - 2022</h3>
      </div>
    </section>
  );
};

export default Footer;
