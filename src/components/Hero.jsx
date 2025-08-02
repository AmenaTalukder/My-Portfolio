import profile from "../assets/profile.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Hero.module.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  const titles = [
    {
      text: "Full Stack Developer (MERN)"
    },
    {
      text: "Frontend Developer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageWrapper}>
            <div className={styles.profileImageContainer}>
              <img
                src={profile}
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.profileRing}></div>
              <div className={styles.profileGlow}></div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className={styles.statsContainer}>
            <motion.div
              className={styles.statBox}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={styles.statIcon}>💼</div>
              <div className={styles.statNumber}>1+</div>
              <div className={styles.statLabel}>
                Years of Self-taught Experience
              </div>
            </motion.div>
            <motion.div
              className={styles.statBox}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={styles.statIcon}>🚀</div>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Completed Projects</div>
            </motion.div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.title}>
              <span className={styles.greeting}>Hello, I'm</span>{" "}
              <span
                className={`${styles.gradientText} ${styles.purpleToOrange}`}
              >
                Amena Akter and
              </span>
            </h1>

            <div className={styles.animatedTitles}>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={titles[currentIndex].text}
                  className={`${styles.subtitle} ${titles[currentIndex].gradient}`}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className={styles.rolePrefix}>I am a</span>{" "}
                  {titles[currentIndex].text}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className={styles.description}>
              Self-taught passionate developer skilled in{" "}
              <span>JavaScript</span>, <span>React.js</span>,{" "}
              <span>Next.js</span>, <span>Node.js</span>, and{" "}
              <span>MongoDB</span>, with a strong focus on clean code,
              responsive design, and continuous learning.
            </p>

            <div className={styles.linksContainer}>
              <div className={styles.socialLinks}>
                <motion.a
                  href="https://www.linkedin.com/in/amena-akter-49a22a251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.socialIcon}>💼</span>
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/AmenaTalukder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.socialIcon}>💻</span>
                  GitHub
                </motion.a>
                <motion.a
                  href="https://x.com/amena34678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.socialIcon}>🐦</span>
                  Twitter
                </motion.a>
              </div>

              <div className={styles.buttons}>
                <motion.a
                  href="https://drive.google.com/file/d/1M2HRzPAdkEk-O3_qrJmqcxrYpFOnWi1Y/view?usp=sharing"
                  download
                  className={styles.downloadButton}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.buttonIcon}>📄</span>
                  Download Resume
                </motion.a>
                <motion.a
                  className={styles.contactButton}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.buttonIcon}>⚙️</span>
                  <Link to="/service" className={styles.buttonLink}>
                    {" "}
                    My Services
                  </Link>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
