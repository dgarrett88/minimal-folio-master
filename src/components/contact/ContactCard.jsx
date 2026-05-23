import React from 'react';
import CardData from "../../assets/json/cardData.json";

const ContactCard = () => {

  const handleCardClick = (url) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  };

  return (
    <>
    <div className='contact-cards-container'>
      {CardData.contactData.map((data, id) => (
        <div key={id} className='contact-card' onClick={() => handleCardClick(data.url)}>
          <img src={data.image} alt="icon" />
          <p>{data.title}</p>
        </div>
      ))}

    </div>

      
    </>
  );
}

export default ContactCard;
