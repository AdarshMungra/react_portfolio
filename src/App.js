import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Sidebar from './components/sidebar/sidebar';
import AboutMe from './components/about/aboutme';
import Contact from './components/contacts/contacts';
import Skills from './components/skills/skills'; 
import Projects from './components/projects/projects';
import Blogs from './components/blogs/blogs';
import CV from './components/CV/cv';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} /> 
            <Route path="/blogs" element= {<Blogs />}/>
            <Route path="/CV" element= {<CV />}/>
            
            {/* Add more routes for other pages */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
