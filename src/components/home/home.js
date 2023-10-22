import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const Home = () => {
  const ballRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

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
        const ballRect = ballRef.current.getBoundingClientRect();
        const ballCenterX = ballRect.left + ballRect.width / 2;
        const ballCenterY = ballRect.top + ballRect.height / 2;
        const distX = mouseX - ballCenterX;
        const distY = mouseY - ballCenterY;
        const newBallX = ballRect.left + distX * 0.06;
        const newBallY = ballRect.top + distY * 0.06;
        ballRef.current.style.transform = `translate(${newBallX}px, ${newBallY}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="home">
      <section>
        <div className="text-content">
          <h1>HELLO</h1>
        </div>
        <div className="ball" ref={ballRef}></div>
      </section>
    </div>
  );
};

export default Home;
