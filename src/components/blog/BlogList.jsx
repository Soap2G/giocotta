import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../posts/posts';
import './BlogList-style.css'
import CustomMap from './PeruMap'
import Countdown from './Countdown'

const BlogList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPost, setHoveredPost] = useState(null);

  const handleMouseEnter = (post) => {
    setHoveredPost(post.slug);
  };

  const handleMouseLeave = () => {
    setHoveredPost(null);
  };

  useEffect(() => {
    setIsLoaded(true); // Trigger the transition
  }, []);

  const highlightedPath = posts.map(post => post.slug);

return (
  <center>
    <div className={`blog-list ${isLoaded ? 'loaded' : ''}`}>
      <CustomMap highlightedPathId={highlightedPath} />
      <div
        style={{
          display: 'inline-block', // Make items appear in a single row
          gap: '1rem',     // Add spacing between posts
          marginTop: '5vh',
          justifyContent: 'center',
        }}
      >
        {posts.length === 0 ? (
          <Countdown /> // Render placeholder when no posts exist
        ) : (
          posts.map((post) => (
            <div
              key={post.slug}
              className="post-container"
              onMouseEnter={() => handleMouseEnter(post)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="post-hover-text">
                {hoveredPost === post.slug && <span>{post.title}</span>}
              </div>
              <Link 
                className="post-link" 
                title={post.title} 
                to={`/blog/${post.slug}`}>
                {post.slug}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  </center>
);
};

export default BlogList;
