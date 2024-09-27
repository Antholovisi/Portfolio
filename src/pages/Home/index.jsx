import React, { useState, useEffect } from 'react';
import './Home.scss';
import profilePicture from '../../assets/images/profile.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Utilisation de useEffect pour déclencher l'animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 250);
    
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour gérer le scroll avec un offset pour la navbar
  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    const section = document.querySelector(sectionId);

    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight; // Calcul du décalage
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth', // Scroll fluide
      });
    }
  };

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
          <a href="#contact" className="cta-button" onClick={(e) => handleScroll(e, '#contact')}>Me contacter</a>
          <a href={`${process.env.PUBLIC_URL}/CV2024.pdf`} className="cta-button" target="_blank" rel="noopener noreferrer">
  Mon CV
</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
