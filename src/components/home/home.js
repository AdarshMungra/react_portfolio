import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const fullText = 'Welcome to my portfolio website!'; // The full text you want to display
  const typingSpeed = 50; // Adjust typing speed in milliseconds
  const erasingSpeed = 30; // Adjust erasing speed in milliseconds
  const pauseDuration = 1000; // Duration after typing and before erasing (1 second)

  const typeWriter = () => {
    let text = welcomeText;
    let isTyping = true;
    let typingIndex = text.length;

    const type = () => {
      if (typingIndex < fullText.length) {
        text += fullText[typingIndex];
        setWelcomeText(text);
        typingIndex++;
        setTimeout(type, typingSpeed);
      } else {
        isTyping = false;
        setTimeout(erase, pauseDuration);
      }
    };

    const erase = () => {
      if (isTyping) {
        setTimeout(erase, erasingSpeed);
      } else if (text.length > 0) {
        text = text.slice(0, -1);
        setWelcomeText(text);
        setTimeout(erase, erasingSpeed);
      } else {
        setTimeout(type, pauseDuration);
      }
    };

    type();
  };

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className="home">
      <h1 className="welcome-text">{welcomeText}</h1>
      <p>
        This is the home page of my portfolio website. Feel free to explore and
        learn more about me and my work.
      </p>

      <div className="app">
        <div className="sections-container"></div>
      </div>
    </div>
  );
};

export default Home;
