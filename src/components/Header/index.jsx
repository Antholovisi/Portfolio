import React, { useEffect, useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Utilisation de useEffect pour déclencher l'animation lors du chargement de la page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Délai avant de rendre la navbar visible (0.5s)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`navbar ${isVisible ? 'navbar-visible' : ''}`}>
      <nav>
        <ul>
          <li><a href="#home">Acceuil</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#compétences">Compétences</a></li>
          <li><a href="#about">A propos</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/Antholovisi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/antho-lo-76198b324/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
