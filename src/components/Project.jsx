import React from "react";
import styles from "../styles/Project.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/variants";

const Project = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with payment integration and admin dashboard.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task manager with drag-and-drop functionality.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and GSAP animations.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "SCSS", "GSAP"],
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "Full-stack blogging platform with Markdown support.",
      image: "/api/placeholder/300/200",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Social Media App",
      description: "A real-time social media application with live chat.",
      image: "/api/placeholder/300/200",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard using OpenWeather API.",
      image: "/api/placeholder/300/200",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "#"
    },
    {
      title: "Crypto Tracker",
      description: "Live cryptocurrency price tracking web app.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Chart.js", "Coingecko API"],
      link: "#"
    },
    {
      title: "Online Learning Platform",
      description: "E-learning website with video streaming and quizzes.",
      image: "/api/placeholder/300/200",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile app to track workouts and fitness goals.",
      image: "/api/placeholder/300/200",
      technologies: ["React Native", "SQLite", "Redux"],
      link: "#"
    },
    {
      title: "Travel Booking Website",
      description: "Full-featured travel booking platform.",
      image: "/api/placeholder/300/200",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <section className={styles.projectSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className={styles.projectLink}>
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
