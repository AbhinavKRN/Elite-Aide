import React from 'react';
import '../styles/Features.css';
import featureImage from '../assests/Group 1410103859.png'; 

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-image-container">
        <img src={featureImage} alt="Current Features" className="features-img" />
      </div>
    </section>
  );
}

export default Features;
