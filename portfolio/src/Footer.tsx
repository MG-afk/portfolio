import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      &copy; Michal Gabrys {year} | <a href="#">Privacy Policy</a>
    </footer>
  );
}
