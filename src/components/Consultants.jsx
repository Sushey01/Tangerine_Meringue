import React from "react";
import "./Consultants.css";
import Doctor1 from "../assets/images/doctr1.png";
import Doctor2 from "../assets/images/doctr2.png";
import Doctor3 from "../assets/images/doctr3.png";
import Doctor4 from "../assets/images/doctr4.png";
import Doctor5 from "../assets/images/doctr5.png";

const Consultants = () => {
  return (
    <section className="section5">
      <div className="consultants-container">
        <div className="consultants-title">
          <h1>Our Chief Consultants</h1>
          <div className="two-consultants-arrow">
            <button className="button1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="#fff"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-left-icon lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <button className="button2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="#fff"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="paragraph">
          We are providing high-quality online courses to improve your skill.
          Our all instructors are highly experience experts. We are providing
          high-quality online courses to improve your skill. We are providing
          high-quality online courses to improve your skill. Our all instructors
          are highly experienced and experts. We are providing high-quality
          online
        </p>

        <div className="five-doctor-container">
          <div className="first-doctor-container">
            <div className="first-doctor-image">
              <img src={Doctor1}></img>
            </div>
            <div className="first-doctor-info">
              <h4>Dr. Sanduk Ruit</h4>
            </div>
            <p className="doc1-info1">
              Pediatric Surgery (MBBS, MS)
            </p>
            <p className="doc1-info2">Chief Consultant, Head of General (GI)</p>
          </div>

          <div className="second-doctor-container">
             <div className="second-doctor-image">
              <img src={Doctor2}></img>
            </div>
            <div className="second-doctor-info">
              <h4>Dr. Bhagwan Koirala</h4>
            </div>
            <p className="doc2-info1">
              Pediatric Surgery (MBBS, MS)
            </p>
            <p className="doc2-info2">Chief Consultant, Head of General (GI)</p>
          </div>

          <div className="third-doctor-container">
           <div className="third-doctor-image">
              <img src={Doctor3}></img>
            </div>
            <div className="third-doctor-info">
              <h4>Dr. Prabin Bikram Thapa</h4>
            </div>
            <p className="doc3-info1">
              Pediatric Surgery (MBBS, MS)
            </p>
            <p className="doc3-info2">Chief Consultant, Head of General (GI)</p>
          </div>
          <div className="fourth-doctor-container">
            <div className="fourth-doctor-image">
              <img src={Doctor4}></img>
            </div>
            <div className="fourth-doctor-info">
              <h4>Dr. Prabin Bikram Thapa</h4>
            </div>
            <p className="doc4-info1">
              Pediatric Surgery (MBBS, MS)
            </p>
            <p className="doc4-info2">Chief Consultant, Head of General (GI)</p>
          </div>
          <div className="fifth-doctor-container">
            <div className="fifth-doctor-image">
              <img src={Doctor5}></img>
            </div>
            <div className="fifth-doctor-info">
              <h4>Dr. Prabin Bikram Thapa</h4>
            </div>
            <p className="doc5-info1">
              Pediatric Surgery (MBBS, MS)
            </p>
            <p className="doc5-info2">Chief Consultant, Head of General (GI)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultants;
