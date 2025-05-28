import React, { useState, useEffect } from 'react';
import './app.css';

const MarineConsultancyApp = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 'boat-building',
      title: 'Boat Building & Customization',
      description: 'Custom fishing boats, patrol vessels, and luxury yachts with various material options.',
      icon: '⛵'
    },
    {
      id: 'engine-services',
      title: 'Marine Engine Services',
      description: 'Expert repair and maintenance for Yamaha, Mercury, Volvo Penta and other major brands.',
      icon: '⚙️'
    },
    {
      id: 'surveying',
      title: 'Marine Surveying & Compliance',
      description: 'Pre-purchase inspections, damage assessments, and regulatory compliance services.',
      icon: '📝'
    },
    {
      id: 'electronics',
      title: 'Marine Electronics',
      description: 'GPS, radar, AIS installations and upgrades for modern navigation needs.',
      icon: '📡'
    },
    {
      id: 'training',
      title: 'Training & Certification',
      description: 'STCW, safety courses, and engine maintenance workshops for professionals.',
      icon: '🎓'
    },
    {
      id: 'specialized',
      title: 'Specialized Solutions',
      description: 'Hybrid/electric retrofits and custom offshore support vessels.',
      icon: '✨'
    }
  ];

  const industries = [
    'Commercial Fishing',
    'Offshore Energy',
    'Government & Defense',
    'Tourism & Charter Fleets'
  ];

  const testimonials = [
    {
      quote: "Increased our fleet's fuel efficiency by 20% with their engine optimization services.",
      author: "Pacific Tuna Co."
    },
    {
      quote: "Delivered our custom patrol boat ahead of schedule with exceptional quality.",
      author: "Coast Guard Division"
    },
    {
      quote: "Their 24/7 emergency support saved us thousands in potential downtime.",
      author: "Caribbean Charter Services"
    }
  ];

  const caseStudies = [
    {
      title: "Fishing Fleet Modernization",
      description: "Complete overhaul of 12-vessel commercial fishing fleet with new engines and electronics."
    },
    {
      title: "Custom Patrol Boat",
      description: "Design and build of a high-speed aluminum patrol boat for maritime law enforcement."
    },
    {
      title: "Luxury Yacht Refit",
      description: "Full interior renovation and hybrid propulsion system installation for 80ft motor yacht."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">Marine<span>Doctors</span></div>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('industries')}>Industries</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Trust Indicators */}
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

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Marine Services</h2>
          <p className="section-subtitle">Comprehensive solutions for all your marine needs</p>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onClick={() => handleServiceClick(service.id)}
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
                      setFormData(prev => ({ ...prev, service: service.title }));
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

      {/* Industries Section */}
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

      {/* Projects & Testimonials */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects & Case Studies</h2>
          
          <div className="case-studies">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study">
                <div className="case-study-image" style={{ backgroundImage: `url(https://source.unsplash.com/random/600x400/?boat,${index})` }}></div>
                <div className="case-study-content">
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <button className="btn-small">View Details</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials">
            <h3>What Our Clients Say</h3>
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial ${index === currentSlide ? 'active' : ''}`}
                >
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <cite>- {testimonial.author}</cite>
                </div>
              ))}
              <div className="slider-dots">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Marine Doctors</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>25 Years of Marine Excellence</h3>
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
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  <p>+1 (800) MAR-INEP</p>
                  <p className="emergency">24/7 Emergency: +1 (800) MAR-EMER</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@marinepro.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>123 Marina Way, Port City, PC 12345</p>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Marine Doctors</h4>
              <p>Full-service marine consultancy and boat manufacturing company providing expert solutions since 1999.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="LinkedIn">🔗</a>
                <a href="#" aria-label="YouTube">▶️</a>
                <a href="#" aria-label="Instagram">📷</a>
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

      {/* Floating CTA */}
      <div className="floating-cta">
        <button className="btn-primary" onClick={() => scrollToSection('contact')}>
          Get a Free Quote
        </button>
      </div>
      {/* Live Chat Button */}
      <div className="live-chat">
        <button 
          className={`chat-button ${isChatOpen ? 'active' : ''}`} 
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label="Open live chat"
        >
          💬 {isChatOpen ? 'Close Chat' : 'Live Chat'}
        </button>
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h4>Live Chat</h4>
            </div>
            <div className="chat-messages">
              <p>Welcome to Marine Doctors! How can we help you today?</p>
            </div>
          </div>
        )}
      </div>
      </div>
    
  );
};

export default MarineConsultancyApp;