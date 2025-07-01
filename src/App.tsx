import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Services from './components/Services';
import Industries from './components/Industries';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
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

  const services = [
    {
      id: 'boat-building',
      title: 'Boat Building & Customization',
      description: 'Custom fishing boats, patrol vessels, and luxury yachts with various material options.',
      icon: '⛵'
    },
    {
      id: 'marine-consultancy',
      title: 'Marine Consultancy',
      description: 'Expert advice on marine operations, safety, and compliance.',
      icon: '🛥️'
    },
    {
      id: 'boat-repair',
      title: 'Boat Repair & Maintenance',
      description: 'Comprehensive repair services for all types of vessels.',
      icon: '🔧'
    },
    {
      id: 'marine-surveys',
      title: 'Marine Surveys & Inspections',
      description: 'Thorough inspections to ensure vessel safety and compliance.',
      icon: '📋'
    },
    {
      id: 'training',
      title: 'Training & Certification',
      description: 'Professional training programs for marine operations and safety.',
      icon: '🎓'
    },
    {
      id: 'marine-engineering',
      title: 'Marine Engineering & Design',
      description: 'Innovative engineering solutions for marine projects.',
      icon: '⚙️'
    }
    
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
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

  return (
    <div className="app">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      
      <Hero scrollToSection={scrollToSection} />
      
      <TrustIndicators />
      
      <Services 
        services={services} 
        activeService={activeService} 
        setActiveService={setActiveService} 
        scrollToSection={scrollToSection} 
        setFormData={setFormData}
      />
      
      <Industries />
      
      <Projects />
      
      <About />
      
      <Contact 
        formData={formData}
        isSubmitted={isSubmitted}
        services={services}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      
      <Footer 
        services={services} 
        scrollToSection={scrollToSection} 
        setActiveService={setActiveService}
      />

      {/* Floating CTA and Live Chat remain in App.tsx as they're small components */}
      <div className="floating-cta">
        <button className="btn-primary" onClick={() => scrollToSection('contact')}>
          Get a Free Quote
        </button>
      </div>
      
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