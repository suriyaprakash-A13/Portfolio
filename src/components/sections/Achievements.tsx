import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import './Achievements.css';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading 
          title="Achievements & Certifications" 
          subtitle="Recognition and professional milestones." 
        />
        
        <div className="achievements-grid">
          <motion.div 
            className="achievement-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="achievement-icon">
              <Trophy size={28} />
            </div>
            <div className="achievement-content">
              <div className="achievement-header">
                <h3 className="achievement-title">24-Hour Hackathon Participant</h3>
                <span className="achievement-date">Sep 2025</span>
              </div>
              <h4 className="achievement-org">CodeOClock</h4>
              <p className="achievement-desc">
                Engineered a full-stack distributor onboarding platform using FastAPI and Firebase Firestore. Incorporated an automated Zapier–DocuSign workflow for contract handling, access provisioning, progress tracking, and reminders—minimizing manual intervention throughout.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
