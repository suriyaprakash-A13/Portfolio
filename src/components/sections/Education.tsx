import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background." 
        />
        
        <div className="education-grid">
          <motion.div 
            className="education-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="edu-icon-wrapper">
              <GraduationCap size={32} className="edu-icon" />
            </div>
            <div className="edu-content">
              <h3 className="edu-degree">Integrated M.Sc. Data Science</h3>
              <h4 className="edu-university">Amrita Vishwa Vidyapeetham</h4>
              <div className="edu-meta">
                <span className="edu-date">Sep 2022 – Present</span>
                <span className="edu-location">Coimbatore, India</span>
              </div>
              <div className="edu-gpa">
                <Award size={18} className="gpa-icon" />
                <span>CGPA: 7.62/10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
