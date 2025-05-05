import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './HomePage.css';
import './VSCodeFont.css';
import config from '../config'; // Import config

const HomePage = () => {
  const { personalInfo, images } = config;

  return (
    <div className="homepage">
      <div className="homepage-left">
        <h2>WELCOME TO MY WORLD</h2>
        <h1 className="vscode-font">
          Hi, I'm <span className="highlight">{personalInfo.name}</span>
          <span className="blinking-cursor">|</span>
        </h1>
        <h1 className="vscode-font">{personalInfo.title}</h1>
        <p>{personalInfo.intro}</p>
        <div className="homepage-buttons">
          <Link to="/post/intro" className="btn">View Posts</Link>
          <a href={personalInfo.github} className="btn" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: '8px' }} /> GitHub profile
          </a>
        </div>
      </div>
      <div className="homepage-right">
        <img src={images.profile} alt={personalInfo.name} className="homepage-image" />
      </div>
    </div>
  );
};

export default HomePage;
