import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import './Experience.css';

const experiences = [
  {
    role: 'Data Scientist Intern',
    company: 'HELYXON Healthcare Solutions Pvt. Ltd.',
    location: 'Remote',
    date: 'Apr 2025 – Jun 2025',
    achievements: [
      'Engineered an AI-powered Resume Analyzer using LLMs, LangChain, and LangGraph, increasing candidate screening accuracy by ~35%.',
      'Automated the end-to-end candidate evaluation workflow, cutting manual review time by over 50%.',
      'Constructed a scalable pipeline capable of processing 200+ resumes per day during load testing.',
      'Optimised agent coordination logic, reducing model error rates by ~40%.',
      'Collaborated with the R&D team to refine prompt structures, improving overall system stability by 30%.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and impactful contributions." 
        />
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  <Briefcase size={20} />
                </div>
                <div className="marker-line"></div>
              </div>
              
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-date">{exp.date}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="timeline-achievements">
                  {exp.achievements.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
