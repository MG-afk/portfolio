import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Home</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>About Me</li>
        <li className={styles.navItem}>Portfolio</li>
        <li className={styles.navItem}>Contact Me</li>
      </ul>
    </nav>
  );
}