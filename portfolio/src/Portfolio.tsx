import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 'platformer',
    title: 'Platformer Game',
    description: 'A 2D platformer game built with JavaScript and HTML Canvas.',
    learnings: [
      'Implemented game physics from scratch',
      'Managed complex state for player movement',
      'Optimized collision detection algorithms'
    ],
    gifUrl: '/api/placeholder/600/400', // Replace with your actual GIF URL
    githubUrl: 'https://github.com/yourusername/platformer',
    liveUrl: 'https://your-platformer-demo.com'
  },
  {
    id: 'map',
    title: 'Map Pointer',
    description: 'Interactive map application with custom markers and routing.',
    learnings: [
      'Integrated Google Maps API',
      'Implemented custom marker clustering',
      'Built route optimization algorithm'
    ],
    gifUrl: '/api/placeholder/600/400', // Replace with your actual GIF URL
    githubUrl: 'https://github.com/yourusername/map-pointer',
    liveUrl: 'https://your-map-demo.com'
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'A feature-rich calculator with advanced mathematical functions.',
    learnings: [
      'Built complex UI with React',
      'Implemented mathematical expression parser',
      'Created responsive design system'
    ],
    gifUrl: '/api/placeholder/600/400', // Replace with your actual GIF URL
    githubUrl: 'https://github.com/yourusername/calculator',
    liveUrl: 'https://your-calculator-demo.com'
  }
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleProjectChange = (projectId) => {
    if (projectId === activeProject) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject(projectId);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div>
      <nav className={styles.portfolioNav}>
        {projects.map((project) => (
          <button
            key={project.id}
            className={`${styles.navButton} ${
              activeProject === project.id ? styles.active : ''
            }`}
            onClick={() => handleProjectChange(project.id)}
          >
            {project.title}
          </button>
        ))}
      </nav>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.project} ${
              activeProject === project.id && !isTransitioning ? styles.visible : ''
            }`}
          >
            <div className={styles.projectContent}>
              <div className={styles.gifContainer}>
                <img src={project.gifUrl} alt={`${project.title} demo`} />
              </div>
              
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                
                <h3>What I Learned:</h3>
                <ul>
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
                
                <div className={styles.projectLinks}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={20} /> View Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}