import React from 'react';
import '../App.css'; 

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Marine Doctors</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>2 Years of Marine Excellence</h3>
            <p>Founded in 2024, Marine Doctors has grown from a small boat repair shop to a full-service marine consultancy and manufacturing company serving clients worldwide.</p>
            <p>Our team of certified marine engineers, naval architects, and technicians bring decades of combined experience to every project.</p>
            <div className="certifications">
              <div className="certification-badge">ISO 9001</div>
              <div className="certification-badge">IMO Certified</div>
              <div className="certification-badge">Yamaha OEM</div>
              <div className="certification-badge">Suzuki Partner</div>
            </div>
          </div>
          <div className="about-image">
            <img src="\images\Office.jpeg" alt="Marine Doctors Team" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;