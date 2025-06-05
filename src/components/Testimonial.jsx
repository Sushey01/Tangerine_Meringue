import React from "react";
import "./Testimonial.css";
import Quote1 from "../assets/images/quote1.png";
import Quote2 from "../assets/images/quote2.png";
import Doctor from "../assets/images/doctr2.png";

const Testimonial = () => {
  return (
    <section className="section10">
      <div className="testimonial-container">
        <h3>Testimonial</h3>
        <div className="testimonial-head">
          <h1>What They say about Us</h1>
          <div className="testimonial-button">
            <button className="testimonial-button1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                color="blue"
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
            <button className="testimonial-button2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                color="blue"
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
        <div className="testimonial-content">
          <img src={Quote1}></img>
          <p>
            South City Himal Hospital is a multi-disciplinary tertiary care
            hospital situated in Kathmandu. With over 25 years of experience and
            expertise, we have been providing quality and affordable healthcare
            to the community. We are proud of our highly-experienced clinicians,
            technicians & administrators, backed by state-of-the-art technology
            and dependable infrastructure. Our hospital is fostered by
            highly-trained and caring nurses who strive to give you the best
            patient care and experience the town has to offer. We strive to
            create an institution with safe and evidence based medicine
            alongside setting high ethical standards in medical practice.
            Providing high quality and affordable health care to the society is
            what we focus most on.
          </p>

          <div className="testimonial-doctor-image-container">
            <div className="image-content">
              <img src={Doctor}></img>
              <div className="image-content1">
                <h2>Dr.Bhagwan koirala</h2>
                <p>Senior Cardiothoracic surgeon</p>
              </div>
            </div>
            <div className="quote2-image">
              <img src={Quote2}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
