import React, { useState, useEffect } from 'react';
import './Home.scss';
import profilePicture from '../../assets/images/profile.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Utilisation de useEffect pour déclencher l'animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-section scroll-offset">
      <div className={`content ${isVisible ? 'content-visible' : ''}`}>
        <div className="profile">
          <img src={profilePicture} alt="Votre Nom" className="profile-picture" />
          <div className={`intro ${isVisible ? 'intro-visible' : ''}`}>
            <h1>Bienvenue, je suis Anthony Lovisi</h1>
            <p>Développeur web frontend spécialisé en React. J'adore créer des expériences utilisateur fluides et modernes.</p>
          </div>
        </div>
        
        <div className="buttons">
          <a href="#contact" className="cta-button">Me contacter</a>
          <a href="/cv.pdf" className="cta-button" target="_blank" rel="noopener noreferrer">Mon CV</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
