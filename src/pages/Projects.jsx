import React, { useState } from "react";
import ProjectCardSm from "../components/projects/ProjectCardSm";
import ProjectCardLg from "../components/projects/ProjectCardLg";
import cardData from "../assets/json/cardData.json";

// Our fade logic
import FadeAnimation from "../components/common/FadeAnimation";

const Projects = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  // 1) If null: no large card selected → small cards are visible, large is hidden.
  //    If not null: large card is visible, small cards are hidden (cross-fade overlap).

  const handleCardClick = (cardId) => {
    // Show large card
    setSelectedCardId(cardId);
  };

  const handleCloseLargeCard = () => {
    
    // Hide large card
    setSelectedCardId(null);
  };

  return (
    <div className="projects-main-container">
      <div className="cards-wrapper">

        {/**  A) SMALL CARDS  **/}
        <FadeAnimation
          key="small-cards"
          // If user selected a large card => fade OUT
          // If none selected => fade IN
          trigger={selectedCardId !== null} 
          duration={1000} 
        >
          <div className="card-container">
            <ProjectCardSm
              cardData={cardData}
              handleCardClick={handleCardClick}
            />
          </div>
        </FadeAnimation>

        {/**  B) LARGE CARD  **/}
        <FadeAnimation
          key="large-card"
          // If selectedCardId === null => fade OUT
          // else => fade IN
          trigger={selectedCardId === null}
          duration={1000}
        >
          {selectedCardId !== null && (
            <div className="lg-card-position">
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