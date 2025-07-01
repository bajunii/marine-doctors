import React from 'react';
import './TrustIndicators.css';

const TrustIndicators: React.FC = () => {
  return (
    <section className="trust-indicators">
      <div className="container">
        <div className="trust-item">
          <span className="trust-number">200+</span>
          <span className="trust-label">Commercial Fleets Served</span>
        </div>
        <div className="trust-item">
          <span className="trust-number">10,000+</span>
          <span className="trust-label">Vessels Serviced</span>
        </div>
        <div className="trust-item">
          <span className="trust-number">24/7</span>
          <span className="trust-label">Emergency Support</span>
        </div>
        <div className="trust-item">
          <span className="trust-number">ISO</span>
          <span className="trust-label">Certified</span>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;