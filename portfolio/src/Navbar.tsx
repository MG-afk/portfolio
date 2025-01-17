import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Home</h1>
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
        <li className={styles.navItem}>About Me</li>
        <li className={styles.navItem}>Portfolio</li>
        <li className={styles.navItem}>Contact Me</li>
      </ul>
    </nav>
  );
}
