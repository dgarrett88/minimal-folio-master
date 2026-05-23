import React, { useEffect, useState } from "react";

// Component imports
import ContinueButton from "../common/ContinueButton";
import Hi from "../welcome/Hi";

const WelcomeB = ({onContinue }) => {
  const [showHi, setShowHi] = useState(true);
  const [showPageContent, setShowPageContent] = useState(false);

  const letters = "Dave.".split("");
  const animationDuration = 3250;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHi(false);
      setShowPageContent(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-main-container">
      <div className="hi-main-container">
        {showHi && <Hi />} {/* Render Hi component conditionally */}
      </div>

      {showPageContent && (
        <>
          <div className="welcomeB">
            <div className="welcome-name-container">
              <p className="welcomeB-my-name-is">My name is&nbsp;</p>
              <p>
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    className={`letter bounce-fade-in`}
                    style={{ animationDelay: `${750 + index * 100}ms` }} // Delay for each letter
                  >
                    {letter}
                  </span>
                ))}
              </p>
            </div>
            <div className="welcomeB-text-container">
              <p className="welcome-dynamic">I enjoy creating dynamic</p>
              <p className="welcome-user-friendly">user-friendly web experiences.</p>
            </div>
          </div>
          <ContinueButton
          delay={animationDuration} 
          onContinue={onContinue}
          />{" "}
          {/* This will now appear with the rest of the welcome content */}
        </>
      )}
    </div>
  );
};

export default WelcomeB;
