import React from 'react';
import '../styles/Navbar.css';
import logo from '../assests/Vector-32.png'; 

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo-box">  
          <img src={logo} alt="Elite Aide Logo" className="logo-image" />
        </div>
        <div className="nav-links">
          <a href="#home" className="home-link">Home</a>
          <a href="#about" className="about-link">About</a>
          <a href="#contact" className="contact-link">Contact Us</a>
          <a href="#download" className="download-link">Download the App</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;