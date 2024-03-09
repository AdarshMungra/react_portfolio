import React from "react";
import "./techstack.css";

const TechStack = () => {
  return (
    <div className="tech">
      <section className="tech-header">
        <h1>TechStack</h1>
      </section>
      <div className="tech-rows-container">
        <section className="tech-categories-container">
          <div className="tech-category">
            <div className="tech-card">
              <h4>FrontEnd</h4>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
              <h3>React</h3>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-card">
              <h4>BackEnd</h4>
              <h3>Node.js</h3>
              <h3>MySQL</h3>
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-card">
              <h4>App Dev</h4>
              <h3>React Native</h3>
              <h3>Flutter</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechStack;
