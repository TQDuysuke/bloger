import React, { useState, useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    require('../pictures/image1.jpg'),
    require('../pictures/image2.jpg'),
    require('../pictures/image3.jpg'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="about-me">
      <div className="about-me-container">
        <div className="slideshow-section">
          <div className="slideshow">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
            <div className="dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="intro-section">
            <h1>Hi there!</h1>
            <p>
              Fuelled by a passion for designing compelling products, I have a deep desire to excel and 
              continuously improve in my work. Learn more about my journey below.
            </p>
          </div>
          <div className="career-section">
            <h2>My Career So Far</h2>
            <p>
              Always up for a challenge, I have worked for lean start-ups and was a member of the first 
              New Zealand start-up to attend Y Combinator, the largest start-up accelerator in the world. 
              From there, I worked my way up to Art Director and Team Lead at a start-up where I oversaw 
              the design of 30+ mobile and desktop apps. Currently, I lead UI/UX design at SaaS start-up VideoMyJob.
            </p>
            <div className="skills">
              <span>UI Design</span>
              <span>UX Design</span>
              <span>Prototyping</span>
              <span>Branding</span>
              <span>HTML/CSS</span>
              <span>Wireframing</span>
              <span>Information Architecture</span>
              <span>User Research</span>
              <span>User Interviews</span>
              <span>Leadership</span>
              <span>Sketch</span>
              <span>Adobe Suite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
