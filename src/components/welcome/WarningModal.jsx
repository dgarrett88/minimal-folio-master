import React, { useEffect } from "react";
import ContinueButton from "../common/ContinueButton";

const WarningModal = ({ onContinue }) => {
  const animationDuration = 3750;

  return (
    <div className="warning-container">
        <div className="warning-text">
          <p className="warning-line-1">This website contains audio cues.</p>
          <p className="warning-line-2">Please adjust your volume.</p>
        </div>
        <div className="continue-btn-wrapper">
          <ContinueButton onContinue={onContinue} delay={animationDuration} />
        </div>
      
    </div>
  );
};

export default WarningModal;
