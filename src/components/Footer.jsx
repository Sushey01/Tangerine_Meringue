import React from "react";
import "./Footer.css";
import FooterIcon from "../assets/images/footericon.svg";
import Alla from "../assets/images/alla.svg";
import MaskGroup from "../assets/images/Maskgroup.svg";

const Footer = () => {
  return (
    <section className="section11">
      <div className="footer-logo">
        <div className="footer-logo-wrapper">
          <img src={FooterIcon} />
        </div>
        <div className="footer-logo-wrapper2">
          <img src={MaskGroup} />
        </div>
        <div className="checkup-instrument">
          <img src={Alla} />
        </div>
      </div>

      <div className="triangle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          class="px-0"
        >
          <defs>
            <linearGradient id="footerGradient">
              <stop offset="0%" stop-color="#00A0AA"></stop>
              <stop offset="100%" stop-color="#234CBB"></stop>
            </linearGradient>
          </defs>
          <path
            class="traingle"
            fill="url(#footerGradient)"
            fill-opacity="1"
            d=" M0,210 Q360,220 720,50 Q1080,210 1440,210 L1440 230  L0,220"
          ></path>
        </svg>
      </div>

      <div className="svg-down-div"></div>

      <div className="footer-container">
        <div className="four-footer-containers">
          <div className="quick-container">
            <h3 className="quick">Quick Link</h3>
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
                <p>
                  Gastro-
                  <br />
                  Enterologyst
                </p>
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
