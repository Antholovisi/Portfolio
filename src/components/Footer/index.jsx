import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <span>
          © 2024 LOVISI Anthony. All <span className="second-line">rights reserved</span>
        </span>
      </div>
      {/* Ajout des icônes sociales */}
      <div className="social-icons">
        <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
