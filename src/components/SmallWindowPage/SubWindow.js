import React, { useState } from 'react';
import './SubWindow.css';

const SubWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="subwindow-overlay">
      <div className="subwindow">
        <button className="subwindow-close" onClick={onClose}>
          X
        </button>
        <div className="subwindow-content">{children}</div>
      </div>
    </div>
  );
};

export default SubWindow;
