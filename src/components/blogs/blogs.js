import React from "react";
import "./blogs.css";
import image from "/home/adarsh/portfolio_website/react_portfolio/src/components/blogs/medium post1.png";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "",
      content: "Everything you need to know to get started with docker.",
      image: image,
      link: "https://medium.com/@adarshmungra1/everything-you-need-to-know-to-get-started-with-docker-8f389148ed5c",
    },
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-header">My Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img
              style={{ borderRadius: 0 }}
              className="blog-image"
              src={post.image}
              alt={post.title}
            />
            <div className="blog-details">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-content">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
