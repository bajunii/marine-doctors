import React, { useState, useEffect } from 'react';
import '../App.css';

interface Testimonial {
  quote: string;
  author: string;
}

interface CaseStudy {
  title: string;
  description: string;
  //img: string;
  src: string;
}

const testimonials: Testimonial[] = [
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

const caseStudies: CaseStudy[] = [
  {
    title: "Fishing Fleet Modernization",
    description: "Complete overhaul of 12-vessel commercial fishing fleet with new engines and electronics.",
    src: "/images/fishing fleet.jpeg",
    //img: "/images/fishing fleet.jpeg"     
  },
  {
    title: "Custom Patrol Boat",
    description: "Design and build of a high-speed aluminum patrol boat for maritime law enforcement.",
    src: "/images/patrol boat.jpeg",
    //img: "/images/patrol boat.jpeg"
  },
  {
    title: "Luxury Yacht Refit",
    description: "Full interior renovation and hybrid propulsion system installation for 80ft motor yacht.",
    src: "/images/luxury yacht.jpeg",
    //img: "/images/luxury yacht.jpeg"
  }
];

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Case Studies</h2>
        
        <div className="case-studies">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study">
              <div className="case-study-image" style={{ backgroundImage: `url(${study.src})` }}></div>
              <div className="case-study-content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>            
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
  );
};

export default Projects;