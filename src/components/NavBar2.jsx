import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import "./Navbar2.css";
import NavbarCard from './NavbarCard';

const menuItems = [
  { label: "Home", link: "#", type: "single" },
  {
    label: "About Us",
    link: "#",
    type: "dropdown",
    items: [
      { label: "Overview", link: "#" },
      {
        label: "Mission and Vision",
        link: "#",
        subItems: [
          { label: "Mission", link: "#" },
          { label: "Vision", link: "#", 
            subSubItems: [
              {label: "Vision Details", link: "#"},
              {label: "Vision Deep Dive",
                link: "#",
              }
            ]
           },
        ],
        
      },
      { label: "Core Values", link: "#" },
      { label: "Chairman's Message", link: "#" },
      { label: "Executive Committee", link: "#" },
    ],
  },
  {
    label: "Services",
    link: "#",
    type: "dropdown",
    items: [
      { label: "Clinical Services", link: "#" },
      { label: "OT Services", link: "#" },
      { label: "Pharmacy Services", link: "#" },
      { label: "Physiotherapy Services", link: "#" },
    ],
  },
  {
    label: "Doctors",
    link: "#",
    type: "single"
  },
  {
    label: "Department",
    link: "#",
    type: "dropdown",
    items: [
      { label: "Cardiology", link: "#" },
      { label: "Aesthetic Medicine", link: "#" },
      { label: "Cardiovascular", link: "#" },
      { label: "Gynaecology", link: "#" },
      { label: "Internal Medicine", link: "#" },
    ],
  },
  {
    label: "Career",
    link: "#",
    type: "single"
  },
  {
    label: "Media",
    link: "#",
    type: "dropdown",
    items: [
      { label: "Image Gallery", link: "#" },
      { label: "Video Gallery", link: "#" },
      { label: "Blogs", link: "#" },
    ],
  },
  { label: "Our Schedules", link: "#", type: "single" },
  { label: "Packages", link: "#", type: "single" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section>
      <div className="nav-wrapper">
        <div className="nav-content">
          <div className="nav-ham">
            <img src={Logo} alt="logo" />
            <div className="hamburger" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                color="#555555"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
              </svg>
            </div>
          </div>

          <div className={`nav-section ${menuOpen ? "show-menu" : ""}`}>
            <NavbarCard menuItems={menuItems} />
          </div>

          <div className="nav-button">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
