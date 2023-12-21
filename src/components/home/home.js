import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './home.css';
import CursorBall from '../cursorBall/cursorBall';
import AboutMe from '../about/aboutme';
import Skills from '../skills/skills';
import Contact from '../contacts/contacts';
import Projects from '../projects/projects';
import Blogs from '../blogs/blogs';
import Welcome from '../welcome/welcome';

const Home = () => {
  const sections = [
    { title: 'Welcome', component: <Welcome />, id: 'section1' },
    { title: 'About Me', component: <AboutMe />, id: 'section2' },
    { title: 'Skills', component: <Skills />, id: 'section3' },
    { title: 'Contact', component: <Contact />, id: 'section4' },
    { title: 'Projects', component: <Projects />, id: 'section5' },
    { title: 'Blogs', component: <Blogs />, id: 'section6' },
    { title: 'Section 7', component: null, id: 'section7' },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setCurrentSectionIndex(Math.floor((scrollPercentage / 100) * sections.length));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      <div className="bento-content">
        {section.component}
      </div>
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
