import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import AboutMe from "./components/about/aboutme";
import Contact from "./components/contacts/contacts";
import Projects from "./components/projects/projects";
import Blogs from "./components/blogs/blogs";
import DumpyProjectPage from "./components/projects/ProjectPages/dumpy/dumpy";
import MaucloProjectPage from "./components/projects/ProjectPages/mauclo/mauclo";
import CursorBall from "./components/cursorBall/cursorBall";
import { Link } from "react-scroll";
import "./components/home/home.css";

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
      <div className="home-container">{sections.map(renderBentoSection)}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <CursorBall />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects/dumpy" element={<DumpyProjectPage />} />
            <Route path="/projects/mauclo" element={<MaucloProjectPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
