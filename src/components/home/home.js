import React from 'react';
import './home.css';
import CursorBall from '../cursorBall/cursorBall';

const Home = () => {
  return (
    <div className="home">
      <section>
        <div className="text-content">
          <h1>HELLO</h1>
        </div>
      </section>
      <CursorBall /> {/* Include the CursorBall component */}
    </div>
  );
};

export default Home;
