import React from "react";
import "./Consultants.css";
import DoctorCard from "./DoctorCard";
import Doctor1 from "../assets/images/doctr1.png";
import Doctor2 from "../assets/images/doctr2.png";
import Doctor3 from "../assets/images/doctr3.png";
import Doctor4 from "../assets/images/doctr4.png";
import Doctor5 from "../assets/images/doctr5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctors = [
  {
    name: "Dr. Sanduk Ruit",
    image: Doctor1,
    info1: "Pediatric Surgery (MBBS, MS)",
    info2: "Chief Consultant, Head of General",
  },
  {
    name: "Dr. Bhagwan Koirala",
    image: Doctor2,
    info1: "Pediatric Surgery (MBBS, MS)",
    info2: "Chief Consultant, Head of General",
  },
  {
    name: "Dr. Prabin Bikram Thapa",
    image: Doctor3,
    info1: "Pediatric Surgery (MBBS, MS)",
    info2: "Chief Consultant, Head of General",
  },
  {
    name: "Dr. Prabin Bikram Thapa",
    image: Doctor4,
    info1: "Pediatric Surgery (MBBS, MS)",
    info2: "Chief Consultant, Head of General",
  },
  {
    name: "Dr. Prabin Bikram Thapa",
    image: Doctor5,
    info1: "Pediatric Surgery (MBBS, MS)",
    info2: "Chief Consultant, Head of General",
  },
];


// const CustomPrevArrow = ({ onClick }) => (
//   <button className="custom-prev" onClick={onClick}>
//     ◀
//   </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <button className="custom-next" onClick={onClick}>
//     ▶
//   </button>
// );

const Consultants = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,

    responsive: [
        {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            }
        },
        {
            breakpoint:600,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2
            }
        }, 
        {
            breakpoint:480,
            settings: {
                slidesToScroll:1,
                slidesToShow:1
            }
        }
    ]
  };

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
      </div>
      <div className="five-doctor-container">
      <Slider {...settings}>
        {doctors.map((doc, index) => (
          <DoctorCard
            key={index}
            image={doc.image}
            name={doc.name}
            info1={doc.info1}
            info2={doc.info2}
          />
        ))}
      </Slider>
    </div>
        
    </section>
  );
};

export default Consultants;


//  <DoctorCard
//                 image={Doctor5}
//                 name="Dr.Bhagwan Koirala"
//                 info1="Pediatric Surgery (MBBS, MS)"
//                 info2="Chief Consultant, Head of General (GI)"
//                 /> 