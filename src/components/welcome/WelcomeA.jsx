import React, { useState, useEffect, useRef } from "react";

// Component imports
import ContinueButton from "../common/ContinueButton";

// Audio imports
import tone1 from "../../assets/audio/tone1.mp3";
import tone2 from "../../assets/audio/tone2.mp3";
import tone3 from "../../assets/audio/tone3.mp3";
import tone4 from "../../assets/audio/tone4.mp3";
import tone5 from "../../assets/audio/tone5.mp3";
import tone6 from "../../assets/audio/tone6.mp3";
import tone7 from "../../assets/audio/tone7.mp3";

// Tone array
const tones = [tone1, tone2, tone3, tone4, tone5, tone6, tone7];
const colors = [
  "#caa3ff",
  "#73ff73",
  "#ffc87f",
  "#ada0ff",
  "#ff8787",
  "#79fffb",
  "#ff95e1",
];
// const colors = [
//   "#E9D9FF",
//   "#BEFFBE",
//   "#FFE1BA",
//   "#F2F0FF",
//   "#FFC0C0",
//   "#CFFFFD",
//   "#FFDFF6",
// ];

const WelcomeA = ({ onContinue }) => {
  const [currentColor, setCurrentColor] = useState(Array(7).fill("")); // Array to hold color of each letter
  const [animationState, setAnimationState] = useState(Array(7).fill(false)); // Array to hold animation state of each letter

  
  useEffect(() => {
    tones.forEach((tone) => {
      const audio = new Audio(tone);
      audio.load();
    });
  }, []);
  

  const playAudio = (tone, color, index, delay) => {
    console.log('Starting animation for letter:', index, 'at time:', Date.now());
    setTimeout(() => {
      const audio = new Audio(tones[tone]);
      audio.play();
      console.log('Audio playback started for letter:', index, 'at time:', Date.now());

      // Start animation and set color for the letter at the given index
      setAnimationState((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
      setCurrentColor((prevState) => {
        const newState = [...prevState];
        newState[index] = color;
        return newState;
      });
    }, delay);
  };

  const handleAnimationEnd = (index) => {
    // Reset animation state and color for the letter at the given index
    setAnimationState((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
    setCurrentColor((prevState) => {
      const newState = [...prevState];
      newState[index] = "";
      return newState;
    });
  };

  useEffect(() => {
    const initialDelay = 750;
    const staggerDelay = 250; 
  
    const animateLetters = () => {
      ["W", "e", "l", "c", "o", "m", "e"].forEach((letter, index) => {
        const delay = initialDelay + staggerDelay * index;
        setTimeout(() => {
          requestAnimationFrame(() => {
            playAudio(index, colors[index], index);
          });
        }, delay);
      });
    };
  
    animateLetters();
  }, []);

  const animationDuration = 2000;

  return (
    <div className="welcome-main-container">
      <div className="welcomeA">
        {["W", "e", "l", "c", "o", "m", "e"].map((letter, index) => (
          <span
            key={index}
            onMouseOver={() => playAudio(index, colors[index], index)}
            onAnimationEnd={() => handleAnimationEnd(index)}
            className={`letter ${animationState[index] ? "bounce" : ""}`}
            style={{
              color: currentColor[index] ? currentColor[index] : "",
              transition: animationState[index]
                ? "none"
                : "color 0.3s ease-in-out", // Set transition only when animation ends
            }}
          >
            {letter}
          </span>
        ))}
      </div>

        <div className="continue-btn-wrapper">
        <ContinueButton 
        onContinue={onContinue} 
        delay={animationDuration} 
        />
        </div>
    </div>
  );
};

export default WelcomeA;