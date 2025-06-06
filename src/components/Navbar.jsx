import React from 'react'
import Logo from '../assets/images/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <section>
        <div className="nav-wrapper">
            <div className="nav-content">
                <img src={Logo} alt='logo' />

            <div className="nav-section">
                <a href='#' class="active">Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Services</a>
                <a href='#'>Doctors</a>
                <a href='#'>Department</a>
                <a href='#'>Career</a>
                <a href='#'>Media</a>
                <a href='#'>Our Schedules</a>
                <a href='#'>Packages</a>
            </div>

            <div className="nav-button">
                <button>Contact Us</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
