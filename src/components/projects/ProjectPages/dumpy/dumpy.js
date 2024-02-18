import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../dumpy/dumpy.css";
import projectImage from "/home/adarsh/portfolio_website/react_portfolio/src/components/projects/ProjectPages/dumpy/dumpyImages/dumpyP3-removebg-preview.png"; // Replace with the path to your image
import projectImage2 from "/home/adarsh/portfolio_website/react_portfolio/src/components/projects/ProjectPages/dumpy/dumpyImages/dumpyP2-removebg-preview.png"; // Replace with the path to your image

const DumpyProjectPage = () => {
  return (
    <div className="dumpy-project-page">
      <div className="project-details">
        <h1>Dumpy - share your weekly dumps.</h1>
        <h2>react native | figma </h2>
      </div>
      <Link to="/projects" className="back-button">
        <IoIosArrowBack /> go back to Projects
      </Link>
      <div className="iphone-mockup" style={{ flexDirection: "column" }}>
        <img style={{ borderRadius: 0 }} src={projectImage} alt="My Photo" />
      </div>
      <div className="iphone-mockup" style={{ flexDirection: "column" }}>
        <img style={{ borderRadius: 0 }} src={projectImage2} alt="My Photo" />
      </div>

      <div className="paragraph">
        <h4>
          Dumpy is a unique social media platform designed to offer a more
          deliberate and authentic sharing experience. Unlike traditional
          platforms, Dumpy encourages users to take their time curating and
          reflecting on their content, with the option to reveal their posts at
          the end of each week or month. This slower approach promotes
          meaningful engagement and thoughtful storytelling, fostering a
          community centered around genuine connections and shared experiences.
          Dumpy is currently in development, with a focus on enhancing its
          features and user experience before its anticipated release.
        </h4>
      </div>
    </div>
  );
};

export default DumpyProjectPage;
