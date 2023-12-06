// Skills.js
import React from 'react';
import './skills.css'; // Import the CSS file
import CursorBall from '../cursorBall/cursorBall'; // Import the CursorBall component

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Skills</h1>

      <div className="skills-category">
        <h2 className="skills-category-heading">Front-end development</h2>
        <p>HTML, CSS, JavaScript</p>
        <p>React, Angular, Vue.js</p>
        <p>UI/UX design</p>
      </div>

      <div className="skills-category">
        <h2 className="skills-category-heading">Programming Languages</h2>
        <p>JavaScript</p>
        <p>Python</p>
        <p>Java</p>
        <p>C++</p>
      </div>

      <div className="skills-category">
        <h2 className="skills-category-heading">Tools and Technologies</h2>
        <p>Git and GitHub</p>
        <p>Webpack</p>
        <p>Node.js</p>
        <p>SQL and NoSQL databases</p>
      </div>

    </div>
  );
}

export default Skills;
