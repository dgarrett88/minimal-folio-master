import React, { useEffect, useState } from "react";

const ContinueButton = ({ onContinue, delay }) => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false); // New state to control animation

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Delay prop value:', delay);
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [delay]);

  const letters = "Continue...".split("");

  const handleMouseEnter = () => {
    setAnimate(true); // Start animation on mouse enter
  };

  const handleAnimationEnd = (index) => {
    if (index === letters.length - 1) {
      setAnimate(false); // Reset animation state after the last letter animates
    }
  };

  return (
    <div 
        onClick={onContinue} 
        onMouseEnter={handleMouseEnter} // Trigger animation on hover
        className={`continue-btn-container ${visible ? 'visible' : ''}`}
    >
      <p className="continue-button">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`letter bounce-fade-in ${animate ? 'animate' : ''}`} // Add 'animate' class conditionally
            onAnimationEnd={() => handleAnimationEnd(index)} // Handle animation end
            style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for each letter
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ContinueButton;
