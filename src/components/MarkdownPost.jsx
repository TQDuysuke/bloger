// src/components/MarkdownPost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const MarkdownPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [toc, setToc] = useState([]);

  useEffect(() => {
    fetch('/posts/posts.json')
      .then((res) => res.json())
      .then((posts) => {
        const post = posts.find((p) => p.slug === slug);
        if (post) {
          fetch(post.file)
            .then((res) => res.text())
            .then((text) => {
              setContent(text);
              generateToc(text);
            });
        }
      });
  }, [slug]);

  const generateToc = (markdown) => {
    const headings = markdown.match(/^#{1,6} .+/gm) || [];
    const tocItems = headings.map((heading) => {
      const level = heading.match(/^#+/)[0].length;
      const text = heading.replace(/^#+ /, '');
      const id = text.toLowerCase().replace(/\s+/g, '-');
      return { level, text, id };
    });
    setToc(tocItems);
  };

  return (
    <div className="markdown-body">
      {toc.length > 0 && (
        <div className="toc">
          <h2>Mục lục</h2>
          <ul>
            {toc.map((item, index) => (
              <li key={index} style={{ marginLeft: `${(item.level - 1) * 20}px` }}>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 id={props.children.toString().toLowerCase().replace(/\s+/g, '-')}>{props.children}</h1>,
          h2: ({ node, ...props }) => <h2 id={props.children.toString().toLowerCase().replace(/\s+/g, '-')}>{props.children}</h2>,
          h3: ({ node, ...props }) => <h3 id={props.children.toString().toLowerCase().replace(/\s+/g, '-')}>{props.children}</h3>,
          // Add similar mappings for h4, h5, h6 if needed
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPost;
