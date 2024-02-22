import React from "react";
import "./work.css";
import workP1 from "/home/adarsh/portfolio_website/react_portfolio/src/components/workhistory/workImages/sdworx-logo.png";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="work-header">Timeline 📅 | Work 💼</h1>
      <div className="timeline">
        <div className="timeline-content">
          <div className="timeline-period">2023</div>
          <div className="timeline-title">SDworx Internship</div>
          <img
            src={workP1}
            alt="SDworx Internship"
            className="timeline-image"
          />
        </div>
        <div className="timeline-content">
          <div className="timeline-period">2024</div>
          <div className="timeline-title">Graduated</div>
          <img
            src="path_to_your_image"
            alt="Graduated"
            className="timeline-image"
          />
        </div>
        <div className="timeline-content">
          <div className="timeline-period">2024</div>
          <div className="timeline-title">Freelancing</div>
          <img
            src="path_to_your_image"
            alt="Freelancing"
            className="timeline-image"
          />
        </div>
        <div className="timeline-content">
          <div className="timeline-period">2024</div>
          <div className="timeline-title">Freelancing</div>
          <img
            src="path_to_your_image"
            alt="Freelancing"
            className="timeline-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
