import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  const skillsRef = useRef(null);

  const specializations = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      description: "Expert in HTML5, CSS3, JavaScript (ES6+), React, Vue.js",
      technologies: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3"
      ]
    },
    {
      icon: "🔧",
      title: "Backend Development",
      description: "Expert in Node.js, Express",
      technologies: ["Node.js", "Express", "REST APIs"],
      featured: true
    },
    {
      icon: "🗄️",
      title: "Database Management",
      description: "Expert in MySQL, MongoDB, PostgreSQL",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      icon: "🔄",
      title: "Version Control",
      description: "Expert in Git, GitHub, Bitbucket. Providing the best.",
      technologies: ["Git", "GitHub", "GitLab"]
    },
    {
      icon: "📐",
      title: "Responsive Design",
      description:
        "Creating visually appealing and functional websites across devices",
      technologies: ["CSS Grid", "Flexbox", "Bootstrap", "Tailwind"]
    },
    {
      icon: "🔗",
      title: "API Integration & Data Handling",
      description:
        "Expertise in integrating RESTful & GraphQL APIs and managing client-side data flow.",
      technologies: ["Axios", "Fetch API", "React Query", "GraphQL"]
    },
    {
      icon: "🗂️",
      title: "State Management",
      description:
        "Managing complex application state efficiently in scalable projects.",
      technologies: ["Redux Toolkit", "Zustand", "React Context", "Recoil"]
    }
  ];

  const technicalSkills = [
    { name: "HTML", percentage: 95, icon: "🌐", color: "#e34f26" },
    { name: "CSS", percentage: 90, icon: "🎨", color: "#1572b6" },
    { name: "JavaScript", percentage: 85, icon: "⚡", color: "#f7df1e" },
    { name: "React", percentage: 88, icon: "⚛️", color: "#61dafb" },
    { name: "Node.js", percentage: 80, icon: "🟢", color: "#339933" },
    { name: "MongoDB", percentage: 75, icon: "🍃", color: "#47a248" },
    { name: "Next.js", percentage: 82, icon: "🔺", color: "#000000" },
    { name: "TypeScript", percentage: 78, icon: "📘", color: "#3178c6" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Placeholder for future use if you want to trigger something.
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.skillsSection} ref={skillsRef} id="skills">
      <div className={styles.container}>
        {/* Technical Skills Bars */}
        <motion.div
          className={styles.technicalSkills}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className={styles.skillsTitle}>
            My <span className={styles.highlight}>Technical Proficiency</span>
          </h2>

          <div className={styles.skillsGrid}>
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skillItem}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  <span className={styles.skillPercentage}>
                    {skill.percentage}%
                  </span>
                </div>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillProgress}
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specializations Section */}
        <motion.div
          className={styles.specializationsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header remains same */}
          <div className={styles.specializationHeader}>
            <h2 className={styles.specializationTitle}>
              I SPECIALIZE IN A RANGE OF{" "}
              <span className={styles.highlight}>SKILLS</span>
            </h2>
          </div>

          {/* Specialization Cards Grid */}
          <div className={styles.specializationsGrid}>
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                className={`${styles.specializationCard} ${
                  spec.featured ? styles.featuredSpec : ""
                }`}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={styles.specIcon}>{spec.icon}</div>
                <h3 className={styles.specTitle}>{spec.title}</h3>
                <p className={styles.specDescription}>{spec.description}</p>
                <div className={styles.techTags}>
                  {spec.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
