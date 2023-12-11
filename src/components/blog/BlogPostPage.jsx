import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import posts from '../../posts/posts';
import './BlogPostPage-style.css'
import CustomMap from './PeruMap'

const BlogPostPage = () => {
  const { slug } = useParams();
  const [postHtml, setPostHtml] = useState('');

  useEffect(() => {
    const post = posts.find(p => p.slug === slug);
    if (post) {
      fetch(post.path)
        .then(response => response.text())
        .then(markdown => {
          const sanitizedHtml = DOMPurify.sanitize(marked(markdown));
          setPostHtml(sanitizedHtml);
        })
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [slug]);

  console.log([slug])

  return (
    <div>
    <CustomMap highlightedPathId={[slug]} />
    <div dangerouslySetInnerHTML={{ __html: postHtml }} 
    className="markdown-content"
    ></div>
    </div>
  );
};

export default BlogPostPage;
