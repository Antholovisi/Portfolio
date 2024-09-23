import React from 'react';
import Cards from '../../components/Cards';
import './Portfolio.scss';
import images from '../../assets/images/images';

const portfolioData = [
  { image: images.bookiImage, url: 'https://antholovisi.github.io/OC_projet_2/', title: 'Booki', description: 'Site de réservation pour des logements.' },
  { image: images.Sophie, url: 'https://github.com/Antholovisi/OC_projet_3', title: 'Sophie Bluel', description: 'Projet de portfolio pour un photographe.' },
  { image: images.Nina, url: 'https://antholovisi.github.io/OC_Projet_4/', title: 'Nina Carducci', description: 'Site de gestion immobilière.' },
  { image: images.Kasa, url: 'https://www.project5.com', title: 'Kasa', description: 'Location d’appartements entre particuliers.' },
  { image: images.Grimoire, url: 'https://github.com/Antholovisi/Mon_vieux_grimoire', title: 'Mon Vieux Grimoire', description: 'Site de collection de livres.' },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section ">
      <h1>Portfolio</h1>
      <div className="apartement_grid">
        {portfolioData.map((project, index) => (
          <Cards 
            key={index} 
            image={project.image} 
            url={project.url} 
            title={project.title} 
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
