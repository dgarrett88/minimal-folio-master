import React, { useEffect, useRef, useState } from "react";
import ProjectCardSm from "../components/projects/ProjectCardSm";
import ProjectCardLg from "../components/projects/ProjectCardLg";
import cardData from "../assets/json/cardData.json";

// Our fade logic
import FadeAnimation from "../components/common/FadeAnimation";

const Projects = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const largeCardRef = useRef(null);

  // 1) If null: no large card selected → small cards are visible, large is hidden.
  //    If not null: large card is visible, small cards are hidden (cross-fade overlap).

  const handleCardClick = (cardId) => {
    // Show large card
    setSelectedCardId(cardId);
  };

  useEffect(() => {
    if (selectedCardId === null || !largeCardRef.current) return;

    const isMobileView = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobileView) return;

    const scrollTimer = setTimeout(() => {
      const headerOffset = 90;
      const largeCardTop =
        largeCardRef.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: Math.max(largeCardTop - headerOffset, 0),
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(scrollTimer);
  }, [selectedCardId]);

  const handleCloseLargeCard = () => {
    
    // Hide large card
    setSelectedCardId(null);

      window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  };

  return (
    <div className="projects-main-container">
      <div className={`cards-wrapper ${selectedCardId !== null ? "large-card-open" : ""}`}>

        {/**  A) SMALL CARDS  **/}
        {selectedCardId === null && (
          <FadeAnimation
            key="small-cards"
            trigger={false}
            duration={1000}
          >
            <div className="card-container">
              <ProjectCardSm
                cardData={cardData}
                handleCardClick={handleCardClick}
              />
            </div>
          </FadeAnimation>
        )}

        {/**  B) LARGE CARD  **/}
        <FadeAnimation
          key="large-card"
          trigger={selectedCardId === null}
          duration={1000}
        >
          {selectedCardId !== null && (
            <div className="lg-card-position" ref={largeCardRef}>
              <ProjectCardLg
                cardData={cardData.cardData}
                selectedCardId={selectedCardId}
                handleClose={handleCloseLargeCard}
              />
            </div>
          )}
        </FadeAnimation>

      </div>
    </div>
  );
};

export default Projects;