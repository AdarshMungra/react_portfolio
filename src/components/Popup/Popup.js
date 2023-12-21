import React from 'react';
import './Popup.css';

function Popup({ isOpen, closePopup }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <button className='button-popup' onClick={closePopup}>X</button>
      </div>
    </div>
  );
}

export default Popup;
