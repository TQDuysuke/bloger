import React, { useState } from 'react';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/create-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      alert('Bài viết đã được tạo!');
      setTitle('');
      setContent('');
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tạo bài viết mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nội dung:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Tạo bài viết</button>
      </form>
    </div>
  );
};

export default NewPost;
