import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Header = ({ activeRoute, fadeTrigger }) => {
  const [hoveredLink, setHoveredLink] = useState(activeRoute);
  const [hrStyle, setHrStyle] = useState({});
  const [isNavigating, setIsNavigating] = useState(false); // New state to track navigation status
  const navigate = useNavigate();

  useEffect(() => {
    let style = {};

    switch (hoveredLink) {
      case "/projects":
        style = { transform: "translateX(-195%)", width: "71px" };
        break;
      case "/about":
        style = { transform: "translateX(2%)", width: "60px" };
        break;
      case "/contact":
        style = { transform: "translateX(209.5%)", width: "67px" };
        break;
      default:
        style = {};
    }

    setHrStyle(style);
  }, [hoveredLink]);

  const handleNavigation = (path) => {
    setIsNavigating(true); // Set navigating status to true
    fadeTrigger();
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false); // Reset navigating status after navigation completes
    }, 350);
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
