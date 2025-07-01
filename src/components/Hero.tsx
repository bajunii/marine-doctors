import React from 'react';
import '../App.css';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Full-Service Marine Solutions</h1>
        <h2>From Boat Building to Engine Repair & Beyond</h2>
        <p>Design, Build, Maintain, and Optimize Vessels with Expert Marine Consultancy</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('services')}>Explore Our Services</button>
          <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get a Free Quote</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;