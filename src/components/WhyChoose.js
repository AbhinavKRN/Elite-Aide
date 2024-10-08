import React from 'react';
import '../styles/WhyChoose.css';
import whyChooseImg from '../assests/frame.png'; 
const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <img src={whyChooseImg} alt="Why Choose Elite Aide?" className="why-choose-img" />      
      <div className="elite-box">
        <h2 className="elite-title">What is Elite Aide?</h2>
        <div className="elite-content-box">
          <h3 className="elite-subheading">Imagine Task Management as Effortless as Thinking.</h3>
          <p className="elite-paragraph">What if you had an assistant who is intelligent, always ready, and never forgetful—an aide built to understand your needs and evolve with you?</p>
          <h3 className="elite-subheading">This is the future Elite Aide promises.</h3>
          <p className="elite-paragraph">Elite Aide is more than just an app. It’s your personal guide to organizing life’s chaos, designed for those who demand precision and simplicity. We designed Elite Aide with one core belief:</p>
          <h3 className="elite-subheading">You are the chief executive of your life, and you deserve an assistant.</h3>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
