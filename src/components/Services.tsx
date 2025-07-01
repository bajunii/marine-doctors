import React from 'react';
import '../App.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services: Service[];
  activeService: string | null;
  setActiveService: (id: string | null) => void;
  scrollToSection: (id: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    service: string;
    message: string;
  }>>;
}

const Services: React.FC<ServicesProps> = ({
  services,
  activeService,
  setActiveService,
  scrollToSection,
  setFormData
}) => {
  const handleServiceClick = (serviceId: string, serviceTitle: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
    if (activeService !== serviceId) {
      setFormData(prev => ({ ...prev, service: serviceTitle }));
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Marine Services</h2>
        <p className="section-subtitle">Comprehensive solutions for all your marine needs</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onClick={() => handleServiceClick(service.id, service.title)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className={`service-details ${activeService === service.id ? 'visible' : ''}`}>
                <p>{service.description}</p>
                <button 
                  className="btn-small"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection('contact');
                  }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;