import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="section-heading-container">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className="section-divider"
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </div>
  );
};
