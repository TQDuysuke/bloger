import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>Hello! My name is Tran Duy, and I am passionate about web development and programming.</p>
      <p>
        I enjoy creating web applications, exploring new technologies, and sharing my knowledge with others. 
        Feel free to check out my GitHub profile for more projects and contributions.
      </p>
      <a href="https://github.com/TQDuysuke" className="btn">
        Visit My GitHub
      </a>
    </div>
  );
}

export default AboutMe;
