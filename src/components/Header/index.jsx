import React, { useEffect, useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Utilisation de useEffect pour rendre la navbar visible avec animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

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
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar ${isVisible ? 'navbar-visible' : ''}`}>
      <nav>
        <ul>
          <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Accueil</a></li>
          <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#compétences" onClick={(e) => handleScroll(e, '#compétences')}>Compétences</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>À propos</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
          <li><a href="https://github.com/Antholovisi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/antho-lo-76198b324/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
