import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 85 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'NLP & LLMs', level: 90 },
      { name: 'RAG', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Feature Engineering', level: 80 }
    ]
  },
  {
    title: 'Agentic AI & Libraries',
    skills: [
      { name: 'LangChain & LangGraph', level: 95 },
      { name: 'Multi-Agent Systems', level: 90 },
      { name: 'Matplotlib', level: 90 },
      { name: 'Pandas / NumPy', level: 90 }
    ]
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'Tableau', level: 75 },
      { name: 'Data Visualization', level: 85 }
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive overview of my technical capabilities and proficiency levels."
        />

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
