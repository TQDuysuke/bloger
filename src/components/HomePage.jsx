import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './HomePage.css';
import './VSCodeFont.css'; // Add this import for the blinking cursor effect and VS Code font
import tranduyImage from '../pictures/tranduy.jpg'; // Import the image
// import logoImage from '../pictures/logo.png'; // Import the logo

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-left">
        {/* <img src={logoImage} alt="Logo" className="homepage-logo" /> Add logo */}
        <h2>WELCOME TO MY WORLD</h2>
        <h1 className="vscode-font">
          Hi, I'm <span className="highlight">Tran Duy</span>
          <span className="blinking-cursor">|</span>
        </h1>
        <h1 className="vscode-font">a Developer.</h1>
        <p>
          I use technology to simplify experiences and create meaningful interactions. 
          Explore my blog to see how I bring ideas to life.
        </p>
        <div className="homepage-buttons">
          <Link to="/post/intro" className="btn">View Posts</Link>
          <a href="https://github.com/TQDuysuke" className="btn" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: '8px' }} /> GitHub profile
          </a>
        </div>
      </div>
      <div className="homepage-right">
        <img src={tranduyImage} alt="Tran Duy" className="homepage-image" />
      </div>
    </div>
  );
};

export default HomePage;
