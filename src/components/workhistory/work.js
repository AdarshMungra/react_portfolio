import React from "react";
import "./work.css";
import workP1 from "/home/adarsh/portfolio_website/react_portfolio/src/components/workhistory/workImages/sdworx-logo.png";
import workP2 from "/home/adarsh/portfolio_website/react_portfolio/src/components/workhistory/workImages/car-removebg-preview.png";
import workP3 from "/home/adarsh/portfolio_website/react_portfolio/src/components/workhistory/workImages/uom logo300px.png";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="work-header">Timeline 📅 | Work 💼</h1>
      <div className="timeline">
        <div className="timeline-content">
          <div className="timeline-period">2001</div>
          <div className="timeline-title">Born</div>
          <img src={workP2} alt="" className="timeline-image" />
        </div>
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
          <div className="timeline-title">Graduated CS</div>
          <img src={workP3} alt="" className="timeline-image" />
        </div>
        <div className="timeline-content">
          <div className="timeline-period">2024</div>
          <div className="timeline-title">Freelancing</div>
          <img src="path_to_your_image" alt="" className="timeline-image" />
        </div>
      </div>
    </div>
  );
};

export default Work;
