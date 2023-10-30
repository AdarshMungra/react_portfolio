import React, { useState, useEffect } from 'react';
import './home.css';
import CursorBall from '../cursorBall/cursorBall';

const Home = () => {
  const languages = ['HELLO', 'Bonjour', 'Hola', 'Ciao', '你好', 'Привет', 'Merhaba', 'こんにちは', 'Hallo', 'Salut']; // Add more languages as needed
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current language index and loop back to the start when reaching the end
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000); // Change language every 2 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [languages.length]);

  return (
    <div className="home">
      <section>
        <div className="text-content">
          <h1>{languages[currentLanguageIndex]}</h1>
        </div>
      </section>
      <CursorBall />
    </div>
  );
};

export default Home;
