import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/posts" className="btn">View Posts</Link>
          <Link to="/create" className="btn">Create New Post</Link>
        </div>
      </div>
      <div className="homepage-right">
        <img src={tranduyImage} alt="Tran Duy" className="homepage-image" />
      </div>
    </div>
  );
};

export default HomePage;
