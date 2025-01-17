import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Portfolio from "./Portfolio";
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<div className={styles.container}><Home /></div>} />
          <Route path="/about" element={<div className={styles.container}><About /></div>} />
          <Route path="/portfolio" element={<div className={styles.container}><Portfolio /></div>} />
          <Route path="*" element={<div className={styles.container}><NotFound /></div>} />
        </Routes>
      </main>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;