import React, { useState, useEffect } from 'react';
import './SwipeableCard.css';

const SwipeableCard = ({ project, onSwipe }) => {
  const [offset, setOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    if (isSwiping) {
      const handleSwipe = () => {
        setIsSwiping(false);
        if (offset > 100) {
          setSwipeDirection('right');
        } else if (offset < -100) {
          setSwipeDirection('left');
        } else {
          setSwipeDirection(null);
        }
        setOffset(0);
      };

      window.addEventListener('mouseup', handleSwipe);
      window.addEventListener('touchend', handleSwipe);

      return () => {
        window.removeEventListener('mouseup', handleSwipe);
        window.removeEventListener('touchend', handleSwipe);
      };
    }
  }, [isSwiping, offset]);

  const handleMouseDown = (e) => {
    const startX = e.clientX || e.touches[0].clientX;
    let prevX = startX;

    const handleMouseMove = (e) => {
      const currentX = e.clientX || e.touches[0].clientX;
      const deltaX = currentX - prevX;
      prevX = currentX;
      setOffset((prevOffset) => prevOffset + deltaX);
    };

    const handleSwipeEnd = () => {
      setIsSwiping(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('mouseup', handleSwipeEnd);
    window.addEventListener('touchend', handleSwipeEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  };

  const cardStyle = {
    transform: `translateX(${offset}px)`,
    transition: isSwiping ? 'transform 0.3s' : 'none',
  };

  return (
    <div className={`project-card ${swipeDirection === 'right' ? 'liked' : swipeDirection === 'left' ? 'disliked' : ''}`}>
      <div
        className="swipeable-card"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={cardStyle}
      >
        <img src={project.image} alt={project.name} />
        <div className="project-info">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default SwipeableCard;
