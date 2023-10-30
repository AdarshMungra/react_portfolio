import React from 'react';
import './Popup.css';

function Popup({ isOpen, closePopup }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
