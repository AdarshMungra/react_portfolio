import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../mauclo/mauclo.css";
import projectImage from "/home/adarsh/portfolio_website/react_portfolio/src/components/projects/ProjectPages/mauclo/maucloP1-removebg-preview.png"; // Replace with the path to your image

const MaucloProjectPage = () => {
  return (
    <div className="mauclo-project-page">
      <div className="project-details">
        <h1>Mauclo.</h1>
        <h3>Clothing e-commerce website</h3>
        <h2> PHP | Laravel | SQL |</h2>
      </div>
      <Link to="/projects" className="back-button">
        <IoIosArrowBack /> go back to Projects
      </Link>
      <div className="iphone-mockup" style={{ flexDirection: "column" }}>
        <img style={{ borderRadius: 0 }} src={projectImage} alt="My Photo" />
      </div>

      <div className="paragraph">
        <h4>
          Dumpy is a unique social media platform designed to offer a more
          deliberate and authentic sharing experience. Unlike traditional
        </h4>
      </div>
    </div>
  );
};

export default MaucloProjectPage;
