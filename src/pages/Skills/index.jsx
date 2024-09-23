import React, { useEffect, useState, useRef } from 'react';
import './Skills.scss';

const skillsData = [
  { name: 'JavaScript', percentage: 70 },
  { name: 'React', percentage: 80 },
  { name: 'HTML & CSS', percentage: 90 },
  { name: 'Node.js', percentage: 60 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Utilisation de l'Intersection Observer pour détecter si la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after first intersection
          }
        });
      },
      { threshold: 0.5 } // 50% de la section doit être visible
    );

    const section = skillsRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="skills-section" ref={skillsRef}>
      <h1>Compétences</h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-bar">
            <span>{skill.name}</span>
            <div className="progress">
              <div
                className={`progress-done ${isVisible ? 'active' : ''}`}
                style={{ width: `${isVisible ? skill.percentage : 0}%` }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
