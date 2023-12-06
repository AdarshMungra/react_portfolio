// cursorBall.js
import React, { useState, useEffect, useRef } from 'react';
import './cursorBall.css';

const CursorBall = () => {
  const ballRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.pageX);
    setMouseY(event.pageY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (ballRef.current) {
        const distX = mouseX - (ballX + ballRef.current.offsetWidth / 2);
        const distY = mouseY - (ballY + ballRef.current.offsetHeight / 2);

        // Use a smoothing factor (adjust as needed)
        const smoothingFactor = 0.1;

        setBallX(ballX + distX * smoothingFactor);
        setBallY(ballY + distY * smoothingFactor);

        ballRef.current.style.transform = `translate(${ballX}px, ${ballY}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, ballX, ballY]);

  return <div className="cursor-ball" ref={ballRef}></div>;
};

export default CursorBall;
