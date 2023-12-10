import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../posts/posts';
import './BlogList-style.css'
import CustomMap from './PeruMap'

const BlogList = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger the transition
  }, []);

  return (
    <div className={`blog-list ${isLoaded ? 'loaded' : ''}`}>
      <CustomMap/>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
