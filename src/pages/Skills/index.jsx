import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './Skills.scss';

const skillsData = [
  { name: 'JavaScript', percentage: 70, icon: faJs },
  { name: 'React', percentage: 80, icon: faReact },
  { name: 'HTML & CSS', percentage: 90, icon: faHtml5 },
  { name: 'Node.js', percentage: 60, icon: faNodeJs },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
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
      <div className='skills-container-background'>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-bar">
              <span>
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                {skill.name}
              </span>
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
    </div>
  );
};

export default Skills;
