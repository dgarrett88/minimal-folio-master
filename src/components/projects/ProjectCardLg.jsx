import React, { useRef, useEffect } from "react";

const ProjectCardLg = ({ cardData, selectedCardId, handleClose }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    function handleDocumentClick(e) {
      let current = e.target;

      while (current) {
        if (current.classList && current.classList.contains("nav-link")) {
          return;
        }

        current = current.parentElement;
      }

      if (cardRef.current && !cardRef.current.contains(e.target)) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleClose]);

  if (!cardData || !Array.isArray(cardData)) return null;

  const selectedCard = cardData.find((item) => item.id === selectedCardId);

  if (!selectedCard) return null;

  return (
    <div className="lg-card-container" ref={cardRef}>
      <div className="lg-card-image-panel">
        <img
          className={`
            lg-card-image
            ${selectedCard.id === 0 ? "lg-animod-img" : ""}
            ${selectedCard.id === 1 ? "lg-snap-img" : ""}
            ${selectedCard.id === 2 ? "lg-directory-img" : ""}
            ${selectedCard.id === 3 ? "lg-pricing-img" : ""}
          `}
          src={selectedCard.largeImage}
          alt={selectedCard.title}
        />
      </div>

      <div className="lg-card-right">
        <div className="card-header">
          <div>
            <h1 className="card-title">{selectedCard.title}</h1>
          </div>

          <p className="lg-card-close-btn" onClick={handleClose}>
            close
          </p>
        </div>

        <div className="lg-card-description">
          <div className="lg-card-text">
            {selectedCard.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg-card-footer">
          <div className="lg-card-footer-left">
            <p className="foot-text">Tech stack</p>

            <div className="lg-card-tech-images">
              {selectedCard.tech.map((techItem, techId) => {
                const techKey = `tech${techId + 1}`;
                const techImage = techItem[techKey];

                return <img key={techId} src={techImage} alt="Tech logo" />;
              })}
            </div>
          </div>

          <div className="lg-card-footer-link">
            {selectedCard.url ? (
              <a
                className="foot-link-text"
                href={selectedCard.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit site
              </a>
            ) : (
              <p className="foot-link-text disabled-link">In development</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLg;