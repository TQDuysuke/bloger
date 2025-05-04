// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MarkdownPost from './components/MarkdownPost';
import NewPost from './components/NewPost';
import './App.css';

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

const Home = ({ posts }) => (
  <div className="main-content">
    <div className="hero">
      <h1>📘 Blog từ Markdown</h1>
      <p>Chào mừng bạn đến với blog của mình! Tạo và đọc các bài viết Markdown dễ dàng.</p>
      <Link to="/new">Tạo bài viết mới</Link>
    </div>
    <div className="card">
      <h2>Giới thiệu</h2>
      <p>Đây là blog cá nhân của bạn, nơi bạn có thể tạo và đọc các bài viết Markdown.</p>
    </div>
    <div className="card">
      <h2>Hướng dẫn</h2>
      <p>Chọn một bài viết từ danh sách bên trái hoặc tạo bài viết mới để bắt đầu.</p>
    </div>
  </div>
);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts/posts.json')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/new" className="nav-link">Tạo bài viết mới</Link>
        </nav>
        <div className="App">
          <Sidebar posts={posts} />
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/post/:slug" element={<MarkdownPost />} />
            <Route path="/new" element={<NewPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
