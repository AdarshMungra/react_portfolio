import React from 'react';
import './blogs.css';
import CursorBall from '../cursorBall/cursorBall'; // Import the CursorBall component

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'This is the content of Blog Post 1.',
      author: 'John Doe',
      date: 'October 1, 2023',
      image: '/images/blog1.jpg', // Image path
      link: 'Link to your Medium blog post 1', // Add the link to your Medium blog post
    },
    {
      id: 2,
      title: 'Blog Post 2',
      content: 'This is the content of Blog Post 2.',
      author: 'Jane Smith',
      date: 'October 5, 2023',
      image: '/images/blog2.jpg',
      link: 'Link to your Medium blog post 2', // Add the link to your Medium blog post
    },
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-header">My Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-details">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-content">{post.content}</p>
              <p className="blog-info">Author: {post.author}</p>
              <p className="blog-info">Date: {post.date}</p>
              <a className="read-more" href={post.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <CursorBall /> {/* Include the CursorBall component */}
    </div>
  );
};

export default Blogs;
