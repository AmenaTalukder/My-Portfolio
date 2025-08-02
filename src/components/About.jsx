import styles from "../styles/AboutMe.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/variants";

export default function AboutMe() {
  const profileData = [
    {
      icon: "📍",
      label: "Location",
      value: "Bathkura North Para, Tangail Sadar, Bangladesh"
    },
    { icon: "📱", label: "Phone", value: "+880-1782-197533" },
    { icon: "✉️", label: "Email", value: "amenaakter9714@gmail.com" },
    { icon: "🗣️", label: "Languages", value: "Bangla, English, Hindi" }
  ];

  const expertise = [
    "Interactive and accessible UI components",
    "React hooks, Redux Toolkit, Context API",
    "Git version control & GitHub collaboration",
    "RESTful API integration & async data handling",
    "Debugging, testing, performance optimization",
    "Backend fundamentals with Node.js & Express"
  ];

  const technicalSkills = [
    {
      category: "Frontend",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind",
        "SASS"
      ],
      icon: "🎨"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js"],
      icon: "⚙️"
    },
    {
      category: "Database",
      technologies: ["MySQL", "MongoDB", "PostgreSQL"],
      icon: "🗄️"
    },
    {
      category: "Tools",
      technologies: ["GitHub", "GitLab", "Figma", "Adobe XD"],
      icon: "🛠️"
    },
    {
      category: "APIs",
      technologies: ["REST", "GraphQL", "WordPress REST API"],
      icon: "🔗"
    },
    {
      category: "Others",
      technologies: ["AJAX", "JSON", "XML", "jQuery"],
      icon: "📋"
    }
  ];

  const education = [
    {
      degree: "BSc in CSE",
      institution: "Northern University Bangladesh",
      duration: "2023 - Present",
      icon: "🎓"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Tangail Polytechnic Institute",
      duration: "2017 - 2022",
      icon: "📚"
    }
  ];

  const certifications = [
    {
      name: "B2 Level English",
      provider: "IELTS (British Council)",
      icon: "🏆"
    },
    {
      name: "MERN Stack Web Development",
      provider: "Apna College, Online Education Platform, India",
      icon: "💻"
    },
    {
      name: "DSA with Java",
      provider: "Apna College, Online Education Platform, India",
      icon: "🧮"
    },
    {
      name: "Soft Skill Development",
      provider: "Passport to Earning, Bangladesh",
      icon: "🚀"
    }
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>
            <span className={styles.headingLine}></span>
            <span className={styles.gradientText}>About Me</span>
            <span className={styles.headingLine}></span>
          </h2>
          <p className={styles.intro}>
            Hi, I'm <span className={styles.nameHighlight}>Amena Akter</span> —
            a passionate and results-driven web developer with over{" "}
            <span className={styles.highlight}>
              1 year of hands-on experience
            </span>{" "}
            in building scalable, responsive, and user-focused web applications.
            I specialize in{" "}
            <span className={styles.highlight}>
              modern JavaScript frameworks
            </span>{" "}
            and deliver seamless digital experiences through clean code, strong
            UI/UX principles, and agile development practices.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Profile Information */}
          <motion.div
            className={styles.profileCard}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <h3>👤 Profile Information</h3>
            </div>
            <div className={styles.cardContent}>
              {profileData.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.profileItem}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.25, ease: "easeOut" }
                  }}
                >
                  <span className={styles.profileIcon}>{item.icon}</span>
                  <div className={styles.profileInfo}>
                    <span className={styles.profileLabel}>{item.label}:</span>
                    <span className={styles.profileValue}>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Goal */}
          <motion.div
            className={styles.goalCard}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <h3>🎯 Professional Goal</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.goalText}>
                My professional ambition is to evolve into a full-stack web
                expert who not only writes efficient code but also builds
                intuitive, high-impact applications. I aim to contribute to
                innovative tech teams by bringing in strong problem-solving
                skills, a growth mindset, and a commitment to delivering
                business-driven digital solutions that scale.
              </p>
            </div>
          </motion.div>

          {/* Knowledge & Expertise */}
          <motion.div
            className={styles.expertiseCard}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <h3>💡 Knowledge & Expertise</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.expertiseGrid}>
                {expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={styles.expertiseItem}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.25, ease: "easeOut" }
                    }}
                  >
                    <span className={styles.expertiseIcon}>✨</span>
                    <span className={styles.expertiseText}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className={styles.skillsCard}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <h3>🛠️ Technical Skills</h3>
              <p className={styles.skillIntro}>
                A solid technical foundation across the full web development
                stack, with a strong emphasis on frontend frameworks and modern
                tooling.
              </p>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.skillsGrid}>
                {technicalSkills.map((skillCategory, index) => (
                  <motion.div
                    key={index}
                    className={styles.skillCategory}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <div className={styles.skillCategoryHeader}>
                      <span className={styles.skillIcon}>
                        {skillCategory.icon}
                      </span>
                      <h4 className={styles.skillCategoryName}>
                        {skillCategory.category}
                      </h4>
                    </div>
                    <div className={styles.skillTags}>
                      {skillCategory.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.skillTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className={styles.educationCard}
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <h3>🎓 Education</h3>
            </div>
            <div className={styles.cardContent}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={styles.educationItem}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className={styles.educationIcon}>{edu.icon}</div>
                  <div className={styles.educationDetails}>
                    <h4 className={styles.educationDegree}>{edu.degree}</h4>
                    <p className={styles.educationInstitution}>
                      {edu.institution}
                    </p>
                    <span className={styles.educationDuration}>
                      {edu.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className={styles.certificationsCard}
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <h3>🏆 Certifications</h3>
            </div>
            <div className={styles.cardContent}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={styles.certificationItem}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.25, ease: "easeOut" }
                  }}
                >
                  <div className={styles.certificationIcon}>{cert.icon}</div>
                  <div className={styles.certificationDetails}>
                    <h4 className={styles.certificationName}>{cert.name}</h4>
                    <p className={styles.certificationProvider}>
                      {cert.provider}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          className={styles.taglineContainer}
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={styles.tagline}>
            <span className={styles.taglineHighlight}>MERN</span> Web Developer
            •<span className={styles.taglineHighlight}> 20+</span> Projects •
            <span className={styles.taglineHighlight}> E-Commerce</span> •
            <span className={styles.taglineHighlight}> Dashboards</span> •
            <span className={styles.taglineHighlight}> Firebase Auth</span> •
            <span className={styles.taglineHighlight}> Agile Teams</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
