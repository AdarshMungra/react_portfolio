import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./home.css";
import CursorBall from "../cursorBall/cursorBall";
import AboutMe from "../about/aboutme";
import Contact from "../contacts/contacts";
import Projects from "../projects/projects";
import Blogs from "../blogs/blogs";
import Welcome from "../welcome/welcome";
import Work from "../workhistory/work";
import TechStack from "../techstack/techstack";

const Home = () => {
  const sections = [
    { title: "Welcome", component: <Welcome />, id: "section1" },
    { title: "About Me", component: <AboutMe />, id: "section2" },
    { title: "Projects", component: <Projects />, id: "section5" },
    { title: "Contact", component: <Contact />, id: "section4" },
    { title: "Work", component: <Work />, id: "section7" },
    { title: "techstack", component: <TechStack />, id: "section8" },
    { title: "Blogs", component: <Blogs />, id: "section6" },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setCurrentSectionIndex(
        Math.floor((scrollPercentage / 100) * sections.length)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections.length]);

  const renderBentoSection = (section) => (
    <Link
      to={section.id}
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
      className="bento-section"
      key={section.id}
    >
      <div className="bento-content">{section.component}</div>
    </Link>
  );

  return (
    <div className="home-background">
      <div className="home-container">
        {sections.map(renderBentoSection)}
        <CursorBall />
      </div>
    </div>
  );
};

export default Home;
