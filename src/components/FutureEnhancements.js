import React from 'react';
import '../styles/FutureEnhancements.css';
const FutureEnhancement = () => {
  return (
    <section className="future-enhancement-section">
      <div className="enhancement-container">
        <div className="enhancement-box">
          <h2 className="enhancement-title">Future Enhancements- What's ahead</h2>
          <p className="enhancement-paragraph">
            We are constantly pushing the boundaries of what Elite Aide can do. The current app is just the first trial of a future version. From gamification elements like badges and leaderboards to AI-powered task predictions and a Pomodoro focus timer, data analytics, and advanced integrations — <span className="bold-span">Elite Aide has a lot to achieve.</span>
          </p>
        </div>
        <div className="enhancement-box">
          <h3 className="enhancement-subtitle">Our Mission: Redefining Productivity</h3>
          <p className="enhancement-paragraph">
            Elite Aide's mission is simple: to give you control over your time, your tasks, and ultimately, your life. Through innovation, we've built a tool that evolves, predicts, and adapts — bringing together the power of AI with the fluidity of human need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureEnhancement;
