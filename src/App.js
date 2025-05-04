// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MarkdownPost from './components/MarkdownPost';
import HomePage from './components/HomePage';
import { saveAs } from 'file-saver';
import './markdown.scss'; // Import the custom Markdown SCSS
import './App.scss';
import './components/HomePage.scss';

const Sidebar = ({ posts }) => (
  <div className="sidebar">
    <h2>Danh sách bài viết</h2>
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
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Trang chủ</Link>
        </nav>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
