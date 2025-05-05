import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import config from '../config'; // Import config

function AboutMe() {
  const { personalInfo, images } = config;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.slideshow.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.slideshow.length]);

  return (
    <div className="about-me">
      <div className="about-me-container">
        <div className="slideshow-section">
          <div className="slideshow">
            {images.slideshow.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
            <div className="dots">
              {images.slideshow.map((_, index) => (
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
            <h1>{personalInfo.about.greeting}</h1>
            <p>{personalInfo.about.description}</p>
          </div>
          <div className="career-section">
            <h2>My Journey and Projects</h2>
            <p>{personalInfo.about.journey}</p>
            <div className="skills">
              {personalInfo.about.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
