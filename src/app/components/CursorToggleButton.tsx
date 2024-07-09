"use client"
import React, { useState, useEffect } from 'react';

const CursorToggleButton = () => {
  const [cursorState, setCursorState] = useState('default');

  useEffect(() => {
    document.body.className = cursorState;
  }, [cursorState]);

  const toggleCursor = () => {
    setCursorState(prevState => {
      switch (prevState) {
        case 'default':
          return 'Banana';
        case 'Banana':
          return 'Penguin';
        case 'Penguin':
          return 'neonMouse'; // Added the 'neonMouse' case
        case 'neonMouse':
        default:
          return 'default';
      }
    });
  };

  return (
    <>
      <button className={`border-2 text-sm font-semibold border-white text-white rounded-sm px-4 py-2 ${cursorState === 'default' ? 'bg-black text-purple-500' : cursorState === 'Banana' ? 'bg-orange-400' : cursorState === 'neonMouse' ? 'bg-green-500' : 'bg-purple-500'}`} onClick={toggleCursor}>
        Change Mouse
      </button>
    </>
  );
};

export default CursorToggleButton;