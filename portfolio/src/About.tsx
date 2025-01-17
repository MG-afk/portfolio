import { useState, useEffect } from 'react';
import styles from './About.module.css';
import TypingEffectWithCursor from './effects/TypingEffectWithCursor';
import { motion } from 'framer-motion';

export default function About() {
    const greetings: string[] = [
        'Hello, I am Michal Gabrys',
        'Full-Stack Developer',
        'Creative Problem Solver',
        'Tech Enthusiast'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        <TypingEffectWithCursor text={greetings[currentIndex]} />
                    </h1>
                    <div className={styles.subtitle}>
                        Crafting Digital Experiences in the Digital Forest
                    </div>
                </header>

                <section className={styles.bio}>
                    <p>
                        Welcome to my enchanted corner of the web. With a passion for creating
                        elegant solutions to complex problems, I blend technical expertise with
                        creative innovation.
                    </p>
                    <div className={styles.skills}>
                        {['React', 'Node.js', 'TypeScript', 'AWS', 'Python'].map((skill) => (
                            <span key={skill} className={styles.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <div className={styles.fireflies}>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className={styles.firefly} />
                    ))}
                </div>
            </div>
        </div>
    );
}