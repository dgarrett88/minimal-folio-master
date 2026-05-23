import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Title from "../components/common/Title";
import Welcome from "../pages/Welcome";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

import FadeAnimation from "../components/common/FadeAnimation";

// Utils
import { formatTitle } from "../utils/stringUtils";

const Layout = ({ activeRoute, routeHistory }) => {
    const location = useLocation();
    const [fade, setFade] = useState(false);
    const [triggerFadeOut, setTriggerFadeOut] = useState(false);
  
    const fadeTrigger = () => {
      setTriggerFadeOut(true); // Triggers fade out
    };
  
    useEffect(() => {
      if (location.pathname !== routeHistory) {
        // Timer to reset fade state after the animation
        const timer = setTimeout(() => {
          setFade(false);
          // Reset the fade-out trigger
          setTriggerFadeOut(false); 
        }, 250); // Duration of fade-in animation
  
        return () => clearTimeout(timer);
      }
    }, [location, activeRoute]);
  
    return (
      <div>
        {activeRoute !== "/" && <Header activeRoute={activeRoute} fadeTrigger={fadeTrigger} />}
        <FadeAnimation trigger={fade || triggerFadeOut} duration={500} >
        {activeRoute !== "/" && <Title titleText={formatTitle(activeRoute)} />}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/projects" element={<Projects prevRoute={routeHistory[1]} fadeTrigger={fadeTrigger} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </FadeAnimation>
      </div>
    );
  };
  
  export default Layout;
  