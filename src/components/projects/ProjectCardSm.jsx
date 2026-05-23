import React from 'react';
// import cardData from '../../assets/json/cardData.json';

const ProjectCardSm = ({cardData, handleCardClick}) => {




  return (
    <>
      {cardData.cardData.map((item, id) => (
        <div 
        key={id} 
        className="sm-card-container" 
        onClick={() => handleCardClick(id)}>
          
          <div className="sm-card-img-container">
            <img
  src={item.mainImage}
  alt="project"
  className={`
    ${item.id === 1 ? "snap-logo" : ""}
    ${item.id === 3 ? "pricing-preview-img" : ""}
  `}
/>
          </div>

          <div className="sm-card-title">
            <p>{item.title}</p>
          </div>

          <div className="sm-card-tech-img">
            {/* Map over each tech item and use the image path directly */}
            {item.tech.map((techItem, techId) => {
              const techKey = `tech${techId + 1}`;
              const techImage = techItem[techKey];
              return <img key={techId} src={techImage} alt="Tech logo" />;
            })}
          </div>

          <div className="skinnerrr">
            <p>See more</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCardSm;
