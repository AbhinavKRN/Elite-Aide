import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assests/Vector-32.png'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'nav-open' : ''}`}>
      <div className="logo-box">  
        <img src={logo} alt="Elite Aide Logo" className="logo-image" />
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-links">
        <a href="#home" onClick={toggleNav} className="home-link">Home</a>
        <a href="#about" onClick={toggleNav} className="about-link">About</a>
        <a href="#contact" onClick={toggleNav} className="contact-link">Contact Us</a>
        <a href="#download" onClick={toggleNav} className="download-link">Download the App</a>
      </div>
    </nav>
  );
};

export default Navbar;
