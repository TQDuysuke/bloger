// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './pictures/logo.png'; // Import the logo image
import MarkdownPost from './components/MarkdownPost';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe'; // Import the AboutMe component
import { saveAs } from 'file-saver';
import './markdown.css'; // Import the custom Markdown CSS
import './App.css';

const Sidebar = ({ posts }) => (
  <div className="sidebar">
    <h2>Post List</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/posts/posts.json')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const exportContent = (content) => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'exported-content.md');
  };

  return (
    <Router>
      <div >
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-right">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/post/intro" className="nav-link">
              Introduction
            </Link>
            <Link to="/about-me" className="nav-link">
              About Me
            </Link>
            <a href="https://github.com/TQDuysuke" className="nav-link">
              GitHub profile
            </a>
          </div>
        </nav>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} /> {/* Add AboutMe route */}
            <Route
              path="*"
              element={
                <>
                  <Sidebar posts={posts} />
                  <Routes>
                    <Route
                      path="/post/:slug"
                      element={<MarkdownPost exportContent={exportContent} />}
                    />
                  </Routes>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
