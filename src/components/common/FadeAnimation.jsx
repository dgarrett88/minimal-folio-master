import React, { useEffect, useState } from "react";

const FadeAnimation = ({ children, trigger, duration, onFadeComplete, key }) => {
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    if (trigger) {
      setFade("fade-out");
      const timer = setTimeout(() => {
        if (onFadeComplete) {
          onFadeComplete();
        }
      }, duration);
      return () => clearTimeout(timer);
    } else {
      setFade("fade-in");
    }
  }, [trigger, duration, onFadeComplete]);

  return (
    <div className={`fade-animation ${fade}`} style={{ transition: `opacity ${duration}ms` }}>
      {children}
    </div>
  );
};

export default FadeAnimation;
