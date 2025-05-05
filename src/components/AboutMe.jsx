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
    }, 3000);
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
            <h1>Hello!</h1>
            <p>
              I'm Duy, an embedded systems enthusiast from Can Tho, Vietnam. I'm currently developing a personal blog platform using ReactJS to share my technical notes and Markdown (.md) articles. I'm also using Cloudflare Tunnel to host the blog on my local machine and make it remotely accessible.
            </p>
          </div>
          <div className="career-section">
            <h2>My Journey and Projects</h2>
            <p>
              My focus is on embedded systems development, especially with the ESP32 platform. I’ve built sound simulators, MQTT-controlled devices, and real-time embedded applications. My blog project also supports uploading and viewing Markdown articles with images, making it easy to document and share embedded-related content.
            </p>
            <div className="skills">
              <span>Embedded Systems</span>
              <span>ESP32</span>
              <span>FreeRTOS</span>
              <span>MQTT</span>
              <span>C/C++</span>
              <span>ReactJS</span>
              <span>Markdown Integration</span>
              <span>Cloudflare Tunnel</span>
              <span>Docker</span>
              <span>Linux (Ubuntu)</span>
              <span>Web-based Control Interfaces</span>
              <span>Microcontroller Programming</span>
              <span>WebSocket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
