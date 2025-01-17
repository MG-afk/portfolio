import { Link } from 'react-router-dom';
import { Code, Briefcase, ChevronRight, Book } from 'lucide-react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Michal Gabrys</h1>
      <p className={styles.subtitle}>
        Full-Stack Developer & Creative Problem Solver
      </p>
      
      <div className={styles.cta}>
        <Link to="/portfolio">
          <button>
            View My Work <ChevronRight size={20} />
          </button>
        </Link>
        <Link to="/about">
          <button>
            Learn More About Me <ChevronRight size={20} />
          </button>
        </Link>
      </div>

      <div className={styles.highlights}>
        <div className={styles.highlight}>
          <Code size={32} />
          <h3>Technical Skills</h3>
          <p>Proficient in modern web technologies including React, Node.js, and cloud platforms.</p>
        </div>

        <div className={styles.highlight}>
          <Briefcase size={32} />
          <h3>Professional Experience</h3>
          <p>Worked on diverse projects ranging from web applications to system architecture.</p>
        </div>

        <div className={styles.highlight}>
          <Book size={32} />
          <h3>Continuous Learning</h3>
          <p>Always exploring new technologies and best practices to stay at the cutting edge.</p>
        </div>
      </div>
    </div>
  );
}