// Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './home.css';
import CursorBall from '../cursorBall/cursorBall';
import AboutMe from '../about/aboutme'; // Import the AboutMe component
import Skills from '../skills/skills'
import Contact from '../contacts/contacts'
import Projects from '../projects/projects'
import Blogs from '../blogs/blogs'
import Welcome from '../welcome/welcome';

const Home = () => {
  const languages = ['HELLO', 'Bonjour', 'Hola', 'Ciao', '你好', 'Привет', 'Merhaba', 'こんにちは', 'Hallo', 'Salut'];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setCurrentLanguageIndex(Math.floor((scrollPercentage / 100) * languages.length));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [languages.length]);

  const renderBentoSection = (title, content, sectionId, component = null) => (
    <Link
      to={sectionId}
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
      className="bento-section"
      key={sectionId}
    >

      <div className="bento-content">

        {component}
      </div>
    </Link>
  );

  return (
    <div className="home-background">
      <div className="home-container">
        {renderBentoSection('Section 1', 'Content for Section 1', 'section1', <Welcome />)}
        {renderBentoSection('Section 2', 'Content for Section 2', 'section2', <AboutMe />)}
        {renderBentoSection('Section 3', 'Content for Section 3', 'section3', <Skills /> )}
        {renderBentoSection('Section 4', 'Content for Section 4', 'section4' , <Contact />)}
        {renderBentoSection('Section 2', 'Content for Section 5', 'section5', <Projects />)}
        {renderBentoSection('Section 3', 'Content for Section 6', 'section6', <Blogs />)}
        {renderBentoSection('Section 4', 'Content for Section 7', 'section7')}
        <CursorBall />
      </div>
    </div>
  );
};

export default Home;
