import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FadeAnimation from "../common/FadeAnimation";

const Header = ({ activeRoute, fadeTrigger }) => {
  const [hoveredLink, setHoveredLink] = useState(activeRoute);
  const [hrStyle, setHrStyle] = useState({});
  const [isNavigating, setIsNavigating] = useState(false); // New state to track navigation status
  const navigate = useNavigate();

  useEffect(() => {
    setHrStyle(calculateHrStyle(hoveredLink));
  }, [hoveredLink, activeRoute]);

  const handleNavigation = (path) => {
    setIsNavigating(true); // Set navigating status to true
    fadeTrigger();
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false); // Reset navigating status after navigation completes
    }, 350);
  };

  const calculateHrStyle = () => {
    let currentPath = hoveredLink;
    switch (currentPath) {
      case "/projects":
        return { transform: "translateX(-195%)", width: "71px" };
      case "/about":
        return { transform: "translateX(2%)", width: "60px" };
      case "/contact":
        return { transform: "translateX(209.5%)", width: "67px" };
      default:
        return {};
    }
  };

  return (
    <div className="header-main-container">
      <p
        className="nav-link"
        onMouseEnter={() => setHoveredLink("/projects")}
        onMouseLeave={() => !isNavigating && setHoveredLink(activeRoute)}
        onClick={() => handleNavigation("/projects")}
      >
        Projects
      </p>
      <p
        className="nav-link"
        onMouseEnter={() => setHoveredLink("/about")}
        onMouseLeave={() => !isNavigating && setHoveredLink(activeRoute)}
        onClick={() => handleNavigation("/about")}
      >
        About
      </p>
      <p
        className="nav-link"
        onMouseEnter={() => setHoveredLink("/contact")}
        onMouseLeave={() => !isNavigating && setHoveredLink(activeRoute)}
        onClick={() => handleNavigation("/contact")}
      >
        Contact
      </p>
  
      <hr style={hrStyle} />
    </div>
  );
  
};

export default Header;
