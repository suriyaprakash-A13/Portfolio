import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="logo text-gradient">Suriya.</h3>
            <p className="footer-tagline">
              Data Science & AI Graduate architecting end-to-end intelligent systems.
            </p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/suriyaprakash-A13" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/suriya-prakash-a-0a914a311/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:suriyaprakasha489@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Suriya Prakash A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
