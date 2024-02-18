import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import AboutMe from "./components/about/aboutme";
import Contact from "./components/contacts/contacts";
import Projects from "./components/projects/projects";
import Blogs from "./components/blogs/blogs";
import DumpyProjectPage from "./components/projects/ProjectPages/dumpy/dumpy"; // Import the DumpyProjectPage component
import MaucloProjectPage from "./components/projects/ProjectPages/mauclo/mauclo";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects/dumpy" element={<DumpyProjectPage />} />
            <Route path="/projects/mauclo" element={<MaucloProjectPage />} />
            {/* Add a route for the Dumpy project page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
