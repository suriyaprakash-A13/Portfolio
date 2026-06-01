import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import './Projects.css';

const projects = [
  {
    title: 'AI-Driven Multi-Agent System for Business Data Analysis',
    date: 'Jan 2026 – Present',
    description: 'A modular multi-agent workflow that translates natural-language business queries into structured statistical analysis pipelines.',
    achievements: [
      'Architected workflow with LangChain and LangGraph.',
      'Integrated ANOVA, t-test, and Chi-square hypothesis tests.',
      'Generated visual summaries to improve decision-making speed.'
    ],
    tech: ['Python', 'LLMs', 'LangChain', 'LangGraph', 'Data Viz'],
    github: 'https://github.com/suriyaprakash-A13/Multi-Agent-Data-Analyst'
  },
  {
    title: 'Maneuver: AI-Powered Multimodal Voice Agent',
    date: 'Present',
    description: 'A low-latency multimodal voice agent that conducts autonomous discovery calls with real-time frontend updates.',
    achievements: [
      'Built with RPC-based communication for real-time frontend updates.',
      'Integrated Groq LLMs, Whisper STT, Cartesia TTS, and Silero VAD.',
      'Implemented dynamic lead-capture pipelines and post-call analytics.'
    ],
    tech: ['React.js', 'LiveKit', 'Groq', 'WebRTC', 'Conversational AI'],
    github: 'https://github.com/suriyaprakash-A13/Voice-Agent'
  },
  {
    title: 'Video Benchmark Intelligence Platform',
    date: 'Apr 2026 – May 2026',
    description: 'A full-stack platform that discovers competitor YouTube channels and generates benchmark scores.',
    achievements: [
      'Engineered dual-path data pipeline (YouTube API + HTML scraping).',
      'Implemented a content strategy classifier for 10 content types.',
      'Delivered automated PowerPoint export system via pptxgenjs.'
    ],
    tech: ['Next.js', 'React', 'Recharts', 'Cheerio', 'Competitive Intelligence'],
    github: 'https://github.com/suriyaprakash-A13/MyPromoVideos-Assessment-Suriya'
  },
  {
    title: 'SmartSplit: Expense Tracking System',
    date: 'Previous',
    description: 'A full-stack platform for personal and group expense management with smart settlement algorithms.',
    achievements: [
      'Integrated Google OAuth authentication.',
      'Developed a transaction-minimization algorithm for group settlements.',
      'Introduced analytics dashboards to visualize monthly spending trends.'
    ],
    tech: ['React.js', 'Node.js', 'MySQL', 'Prisma ORM'],
    github: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent full-stack and AI engineering work." 
        />
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <div className="project-icon">
                  <Code2 size={28} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
                
                <ul className="project-achievements">
                  {project.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  <FiGithub size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
