// AboutMe.js
import React from "react";
import "./aboutme.css"; // Import your CSS file for styling
import myImage from "/home/adarsh/portfolio_website/react_portfolio/src/assets/logo/projects_tumbs/portfolioPic.jpg"; // Replace with the path to your image

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="about-me-text">
          <h1>About Me ✨</h1>
          <div className="about-me-p">
            {/* Hey! I'm Adarsh Mungra, a passionate developer with a strong
            interest in web development and design based in Mauritius. As a
            computer science student, I'm constantly expanding my knowledge and
            skills in various fields, including AI, ML, app development, and
            cyber-security. */}
            I'm Adarsh Mungra, a passionate developer based in Mauritius with a
            strong interest in web development and design. As a computer science
            student, I'm constantly expanding my knowledge and skills in various
            fields, including AI, ML, app development, and cyber-security. I
            believe in the power of technology to drive positive change and am
            always looking for new challenges and opportunities to learn and
            grow. Whether it's building innovative web applications, exploring
            the possibilities of AI and machine learning, or enhancing
            cyber-security measures, I'm eager to contribute my skills and
            expertise to make a meaningful impact. When I'm not coding, you can
            find me exploring the beautiful landscapes of Mauritius, reading
            about the latest developments in technology, or working on personal
            projects to further refine my skills. Feel free to connect with me
            on LinkedIn to learn more about my work and project
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
