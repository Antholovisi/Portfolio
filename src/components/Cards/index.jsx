import React, { useState } from 'react';
import './Cards.scss';

const Cards = ({ image, url, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="card" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        {isHovered && (
          <div className="modal">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        )}
      </a>
    </div>
  );
};

export default Cards;
