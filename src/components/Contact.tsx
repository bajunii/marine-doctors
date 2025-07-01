import React from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import '../App.css';

interface ContactProps {
  formData: {
    name: string;
    email: string;
    service: string;
    message: string;
  };
  isSubmitted: boolean;
  services: Array<{ id: string; title: string }>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

const Contact: React.FC<ContactProps> = ({
  formData,
  isSubmitted,
  services,
  handleInputChange,
  handleSubmit
}) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Our team is ready to assist with your marine needs.</p>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+254 (794) 32056</p>
                <p className="emergency">24/7 Emergency: +254 (732) 511256</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>haithamomar520@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>123 Old Town, DownTown, Forodhani House</p>
              </div>
            </div>
            
            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
            </div>
          </div>
          
          <div className="contact-form">
            {isSubmitted ? (
              <div className="form-success">
                <h3>Thank You!</h3>
                <p>Your inquiry has been submitted. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3>Service Inquiry</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message or Project Details"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Submit Inquiry</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;