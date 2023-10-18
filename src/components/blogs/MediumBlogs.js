import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const MediumBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const MEDIUM_RSS_URL = 'https://medium.com/feed/@yourusername'; // Replace with your Medium username

    const parser = new Parser();
    parser.parseURL(CORS_PROXY + MEDIUM_RSS_URL).then((feed) => {
      setBlogPosts(feed.items);
    });
  }, []);

  return (
    <div>
      <h1>Your Medium Blogs</h1>
      {blogPosts.map((post) => (
        <div key={post.link}>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h2>{post.title}</h2>
          </a>
          <p>{post.pubDate}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
};

export default MediumBlogs;
