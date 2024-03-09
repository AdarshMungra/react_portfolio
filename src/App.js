import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import AboutMe from "./components/about/aboutme";
import Contact from "./components/contacts/contacts";
import Projects from "./components/projects/projects";
import Blogs from "./components/blogs/blogs";
import DumpyProjectPage from "./components/projects/ProjectPages/dumpy/dumpy"; // Import the DumpyProjectPage component
import MaucloProjectPage from "./components/projects/ProjectPages/mauclo/mauclo";
import CursorBall from "./components/cursorBall/cursorBall";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <CursorBall />

        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
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
