import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Page1 from "../components/welcome/WarningModal";
import Page2 from "../components/welcome/WelcomeA";
import Page3 from "../components/welcome/WelcomeB";

import FadeAnimation from "../components/common/FadeAnimation";

const Welcome = () => {
  const [page, setPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [navigateToProjects, setNavigateToProjects] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      navigate("/projects", { replace: true });
    }
  }, [navigate]);

  const handleContinue = () => {
    if (page < 3) {
      setFade(true);
    } else {
      setFade(true);
      setNavigateToProjects(true);
    }
  };

  useEffect(() => {
    if (fade && page < 3) {
      const timer = setTimeout(() => {
        setPage(page + 1);
        setFade(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [fade, page]);

  useEffect(() => {
    if (navigateToProjects) {
      const timer = setTimeout(() => {
        navigate("/projects");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [navigateToProjects, navigate]);

  return (
    <FadeAnimation
      trigger={fade}
      duration={500}
      onFadeComplete={() => {
        if (page < 3) {
          setPage(page + 1);
        } else {
          navigate("/projects");
        }
      }}
    >
      <div className="welcome-container">
        {page === 1 && <Page1 onContinue={handleContinue} />}
        {page === 2 && <Page2 onContinue={handleContinue} />}
        {page === 3 && <Page3 onContinue={handleContinue} />}
      </div>
    </FadeAnimation>
  );
};

export default Welcome;