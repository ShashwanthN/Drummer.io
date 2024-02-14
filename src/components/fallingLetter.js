// FallingLetter.js
import React, { useState, useEffect } from 'react';
import './fallingLetter.css'; // Import the CSS file for styling

const FallingLetter = () => {
  const [fallingLetter, setFallingLetter] = useState(null);
  const [fallingLetterPosition, setFallingLetterPosition] = useState({ x: 0, y: 0 });
  const letterSpeed = 5; // Adjust the speed as needed

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is valid (e.g., only alphabets)
      const keyPressed = event.key.toLowerCase();
      if (/^[a-zA-Z]+$/.test(keyPressed)) {
        setFallingLetter(keyPressed.toUpperCase());
        setFallingLetterPosition({ x: Math.random() * window.innerWidth, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const updatePosition = () => {
      setFallingLetterPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + letterSpeed,
      }));

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    if (fallingLetter) {
      animationFrameId = requestAnimationFrame(updatePosition);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [fallingLetter]);

  useEffect(() => {
    if (fallingLetterPosition.y >= window.innerHeight) {
      setFallingLetter(null);
    }
  }, [fallingLetterPosition]);

  return (
    <div className="falling-letter-container">
      {fallingLetter && (
        <div
          className="falling-letter"
          style={{
            left: `${fallingLetterPosition.x}px`,
            top: `${fallingLetterPosition.y}px`,
          }}
        >
          {/* Display the falling letter */}
          {fallingLetter}
        </div>
      )}
    </div>
  );
};

export default FallingLetter;
