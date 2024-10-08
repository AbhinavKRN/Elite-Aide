import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChoose from './components/WhyChoose';
import Features from './components/Features';
import FutureEnhancements from './components/FutureEnhancements';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <Features />
      <FutureEnhancements />
      <Footer />
    </div>
  );
};

export default App;
