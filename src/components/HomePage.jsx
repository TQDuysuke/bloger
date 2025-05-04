import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './HomePage.css';
import tranduyImage from '../pictures/tranduy.jpg'; // Import the image

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-left">
        <h2>WELCOME TO MY WORLD</h2>
        <h1>
          Hi, I'm <span className="highlight">Tran Duy</span>
        </h1>
        <h1>a Developer.</h1>
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
