import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Button } from '../ui/Button';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I'm <span className="text-gradient">Suriya Prakash A</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Data Scientist & AI Engineer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Results-oriented AI graduate specializing in LLM-powered agentic systems, machine learning, and full-stack development. I architect end-to-end AI pipelines to deliver measurable business impact.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in touch
            </Button>
            <Button variant="outline" size="lg" icon={<Download size={20} />} onClick={() => window.open('/Suriya_Prakash_Resume.pdf', '_blank')}>
              Download Resume
            </Button>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/suriyaprakash-A13" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/suriya-prakash-a-0a914a311/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:suriyaprakasha489@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
