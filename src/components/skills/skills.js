// Skills.js
import React from 'react';
import './skills.css'; // Import the CSS file
import WordCloud from './WordCloud'; // Import the WordCloud component

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Skills</h1>
      <WordCloud /> {/* Use the WordCloud component here */}
    </div>
  );
}

export default Skills;
