import React from "react";
import "./blogs.css";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "",
      content: "Everything you need to know to get started with docker.",
      image: "/assets/logo/projects_tumbs/medium post1.png",
      link: "https://medium.com/@adarshmungra1/everything-you-need-to-know-to-get-started-with-docker-8f389148ed5c",
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
              <a
                className="read-more"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
