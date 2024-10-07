import React from 'react';
import '../styles/HeroSection.css';
import phoneMockup from '../assests/phone.png';
import playIcon from '../assests/Vector.png';  

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Introducing your virtual personal assistant</h1>
        <p>Elite Aide helps you take control, prioritise with precision, and stay ahead of your tasks—powered by cutting-edge AI.</p>
        <a href="#" className="download-now">
          <img src={playIcon} alt="Play Store Icon" className="play-icon" />
          Download Now
        </a>
      </div>
      <img src={phoneMockup} alt="Phone Mockup" className="phone-mockup" />
    </section>
  );
}

export default HeroSection;
