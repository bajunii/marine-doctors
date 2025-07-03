import React from 'react';
import '../App.css'; 

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  return (
    <header className="header">
    <div className="container">
      <div className="logo">
        <img
        src="/images/Marine doctors.png"
        style={{ height: '40px', marginRight: '8px', verticalAlign: 'middle' }}
        />
        Marine<span>Doctors</span>
      </div>
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
  );
};

export default Navbar;