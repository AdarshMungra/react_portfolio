import React, { useState, useEffect } from "react";
import "./welcome.css";
import { HiArrowDown } from "react-icons/hi";

const Welcome = () => {
  const languages = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "नमस्ते ", // Hindi
    "こんにちは", // Japanese
    "Hello", // English
  ];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to update the language every 3 seconds
    const timer = setInterval(() => {
      // Check if the current language is English; if yes, stop the rotation
      if (currentLanguageIndex === languages.length - 1) {
        clearInterval(timer);
      } else {
        // Rotate to the next language
        setCurrentLanguageIndex((prevIndex) => prevIndex + 1);
      }
    }, 500);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [currentLanguageIndex, languages.length]);

  return (
    <div className="welcome-container">
      <div className="welcome">{languages[currentLanguageIndex]}</div>
      <div className="name">Adarsh Mungra | Portfolio</div>
      <div className="instructions">Press F11 to go fullscreen,</div>
      <div className="instructions">and scroll down!!!</div>
      <div className="arrow">
        <HiArrowDown />
      </div>
    </div>
  );
};

export default Welcome;
