import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../comingsoon/comingsoon.css";

const ComingSoonPage = () => {
  return (
    <div className="comming-project-page">
      <Link to="/projects" className="back-button-soon">
        <IoIosArrowBack /> go back to Projects
      </Link>
      <h1>coming soon...</h1>
    </div>
  );
};

export default ComingSoonPage;
