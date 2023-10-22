// AboutMe.js
import React from 'react';
import './aboutme.css'; // Import your CSS file for styling
import myImage from '/home/adarsh/portfolio_website/react_portfolio/src/assets/logo/projects_tumbs/dog.jpeg'; // Replace with the path to your image
import CursorBall from '../cursorBall/cursorBall'; // Import the CursorBall component

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="about-me-text">
          <h1>About Me</h1>
          <div className='about-me-p'>
            Welcome to my portfolio! I'm a passionate developer with a strong interest in web development and design. Add your content here.
          </div>
        </div>
        <div className="about-me-image">
          <img src={myImage} alt="My Photo" />
        </div>
      </div>
      <CursorBall /> {/* Include the CursorBall component */}
    </div>
  );
};

export default AboutMe;
