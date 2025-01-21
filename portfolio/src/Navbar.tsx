import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoSection}>
        <Leaf size={24} color="var(--accent-color)" />
        <span className={styles.logo}>MG</span>
      </div>
      
      <button 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <nav 
        className={isMenuOpen ? styles.menuOpen : styles.menuClosed}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={`${styles.navLink} ${
              location.pathname === item.path ? styles.active : ''
            }`}
            aria-current={location.pathname === item.path ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}