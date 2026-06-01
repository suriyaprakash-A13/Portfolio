import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import './Contact.css';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form logic here
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Interested in working together? Let's connect." 
        />
        
        <div className="contact-content">
          <motion.div 
            className="contact-info glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-desc">
              I'm always open to discussing new opportunities, collaborations, or freelance projects. Feel free to reach out using the form or the details below.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="detail-label">Email</span>
                  <a href="mailto:suriyaprakasha489@gmail.com" className="detail-value">suriyaprakasha489@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="detail-label">Phone</span>
                  <a href="tel:6374688675" className="detail-value">6374688675</a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Coimbatore, India</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Hello Suriya..." required></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg" icon={<Send size={20} />} className="submit-btn">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
