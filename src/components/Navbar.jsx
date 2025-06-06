import React from "react";
import Logo from "../assets/images/logo.svg";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-square-menu-icon lucide-square-menu"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
              </svg>
            </div>
          </div>

          <div className={`nav-section ${menuOpen ? "show-menu": ""}`}>
            <a href="#" class="active">
              Home
            </a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Doctors</a>
            <a href="#">Department</a>
            <a href="#">Career</a>
            <a href="#">Media</a>
            <a href="#">Our Schedules</a>
            <a href="#">Packages</a>
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
