import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import '../App.css'; 

interface FooterProps {
  services: Array<{ id: string; title: string }>;
  scrollToSection: (id: string) => void;
  setActiveService: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ services, scrollToSection, setActiveService }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Marine Doctors</h4>
            <p>Full-service marine consultancy and boat manufacturing company providing expert solutions since 2024.</p>
            <div className="social-links">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook style={{ display: 'none' }} />
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin style={{ fontSize: '1.5em' }} />
              </a>
              <a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube style={{ fontSize: '1.5em' }} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram style={{ fontSize: '1.5em' }} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter style={{ fontSize: '1.5em' }} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('industries')}>Industries</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <button onClick={() => {
                    scrollToSection('services');
                    setActiveService(service.id);
                  }}>
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p>Subscribe for marine industry updates and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="btn-small">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Marine Doctors. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;