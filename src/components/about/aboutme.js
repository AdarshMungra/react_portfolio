// AboutMe.js
import React from 'react';
import './aboutme.css'; // Import your CSS file for styling
import myImage from '/home/adarsh/portfolio_website/react_portfolio/src/assets/logo/projects_tumbs/portfolioPic.jpg'; // Replace with the path to your image
import CursorBall from '../cursorBall/cursorBall'; // Import the CursorBall component

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        
        <div className="about-me-text">
          <h1>About Me</h1>
          <div className='about-me-p'>
          I'm a passionate developer with a strong interest in web development and design. As a computer science student, I'm constantly expanding my knowledge and skills in various fields, including AI, ML, app development, and security.
          </div>
        </div>
        <div className="about-me-image">
          <img src={myImage} alt="My Photo" />
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
