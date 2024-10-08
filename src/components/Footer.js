import React from 'react';
import '../styles/Footer.css';
import darkHorseImage from '../assests/Frame 1410103860.png';  
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <img src={darkHorseImage} alt="Project Dark Horse" className="footer-image" />
      </div>
    </footer>
  );
};

export default Footer;
