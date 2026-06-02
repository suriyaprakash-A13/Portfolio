import React from 'react';
import { motion } from 'framer-motion';
import { Target, BrainCircuit } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import './About.css';

const highlights = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'AI & LLM Integration',
    description: 'Expertise in LangChain and LangGraph for building autonomous multi-agent workflows and RAG systems.'
  },
  {
    icon: <Target size={24} />,
    title: 'Data-Driven Impact',
    description: 'Focused on measurable outcomes, utilizing statistical testing and analytics to drive business intelligence.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about leveraging Artificial Intelligence to solve complex business problems." 
        />
        
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>My Mission</h3>
            <p>
              I'm a Data Science and AI enthusiast who loves building smart, user-focused applications. My interests include AI agents, large language models, machine learning, and full-stack development. Whether it's creating a real-time voice assistant or designing an analytics platform, I enjoy bringing ideas to life through technology.
            </p>            
            <p>
              I specialize in architecting intelligent systems—from real-time multimodal voice agents to competitive analytics platforms. I thrive in environments that challenge me to integrate complex AI models (like Groq, Whisper, and Custom LLMs) into seamless, user-centric full-stack applications.
            </p>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div 
                key={item.title}
                className="highlight-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="highlight-icon">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
