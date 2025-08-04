import React from "react";
import styles from "./Frontend.module.scss";

const Frontend = () => {
  const frontendProjects = [
    {
      title: "Food Delivery Application",
      description:
        "✨This application designed to provide users with a seamless experience in exploring a diverse menu of burgers. The app allows users to browse, order, and review their favorite burgers, enhancing their dining experience.",
      image: "../../../src/assets/food-delivery.jpg",
      technologies: ["JavaScript", "React", "Bootstrap"],
      link: "https://food-delivery-application-brown.vercel.app/",
      featured: true
    },
    {
      title: "Travel Website",
      description:
        "✨ A modern, responsive travel website UI built using React and SCSS. Includes animated components, video background home & footer, and a sleek layout design.",
      image: "../../../src/assets/Travel App.jpg",
      technologies: ["JavaScript", "React", "SCSS"],
      link: "https://travel-app-ten-snowy.vercel.app/",
      featured: true
    },
    {
      title: "Transactions-Dashboard Application",
      description:
        "✨This project is a Transactions Management Dashboard built using React and Chakra UI. It provides a clean and responsive interface for viewing transaction data, filtering transactions by categories (e.g., Deposit, Withdraw, Trade), and searching for specific transactions..",
      image: "../../../src/assets/Transaction-Dashboard.jpg",
      technologies: ["JavaScript", "React", "Emotiion-Styled", "Chakra-UI"],
      link: "https://transactions-dashboard-ivory.vercel.app/",
      featured: true
    }
  ];

  return (
    <section className={styles.portfolioSection}>
      {/* Background gradients */}
      <div className={styles.backgroundGradients}>
        <div className={`${styles.gradientBlob} ${styles.purple}`}></div>
        <div className={`${styles.gradientBlob} ${styles.orange}`}></div>
        <div className={`${styles.gradientBlob} ${styles.blue}`}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subtitle}>
            Discover my latest work in Frontend development, showcasing modern
            technologies and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {frontendProjects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className={styles.featuredBadge}>Featured</div>
              )}

              {/* Project Image */}
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <p className={styles.description}>{project.description}</p>

                {/* Features (for food delivery app) */}
                {project.features && (
                  <div className={styles.features}>
                    <strong>Features:</strong> {project.features}
                  </div>
                )}

                {/* Technologies */}
                <div className={styles.techStack}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target={project.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    project.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  View Project
                  <svg
                    className={styles.linkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover effect overlay */}
              <div className={styles.hoverOverlay}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frontend;
