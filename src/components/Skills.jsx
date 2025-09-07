import { motion } from 'framer-motion';
import './Skills.css';

const SkillCard = ({ title, skills, icon, delay }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="skill-header">
        <span className="skill-icon">{icon}</span>
        <h3 className="skill-title">{title}</h3>
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <svg className="skill-check" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="skill-name">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🌐',
      skills: ['React',  'HTML', 'CSS'],
      delay: 0.1,
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Spring Boot', 'SQL', 'RESTful APIs', 'Database Design'],
      delay: 0.2,
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: ['Kotlin', 'Firebase', 'Android SDK'],
      delay: 0.3,
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'Android Studio', 'VS Code'],
      delay: 0.4,
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
