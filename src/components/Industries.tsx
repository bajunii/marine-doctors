import React from 'react';
import '../App.css'; // Adjust the path as necessary

const industries = [
  'Commercial Fishing',
  'Offshore Energy',
  'Government & Defense',
  'Tourism & Charter Fleets'
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">Tailored solutions for specialized marine sectors</p>
        
        <div className="industries-list">
          {industries.map((industry, index) => (
            <div key={index} className="industry-item">
              <div className="industry-content">
                <h3>{industry}</h3>
                <p>Customized marine solutions for {industry.toLowerCase()} operations</p>
                <button className="btn-small">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;