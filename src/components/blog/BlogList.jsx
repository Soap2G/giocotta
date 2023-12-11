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

  const highlightedPath = posts.map(post => post.slug);

  return (
    <center>
    <div className={`blog-list ${isLoaded ? 'loaded' : ''}`}>
      <CustomMap highlightedPathId={highlightedPath}/>
      <ul>
        {/* {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))} */}
        
          <div
          style={{
            display: 'inline-block',
            marginTop: '5vh'
          }}
          >        
            {posts.map((post, index) => (
              <React.Fragment key={post.slug}>
                {/* Add a link for each post */}
                <Link 
                className='post-link'
                to={`/blog/${post.slug}`
                }>
                  {post.slug}
                </Link>

                {/* Add a separator, except after the last post */}
                {index < posts.length - 1 && ' '}
              </React.Fragment>
            ))}
          </div>
        
      </ul>
    </div>
    </center>
  );
};

export default BlogList;
