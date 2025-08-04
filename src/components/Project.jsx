import React from "react";
import styles from "../styles/Project.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/variants";
import QuickCart from "../assets/QuickCart.jpg";
import FoodDelivery from "../assets/food-delivery.jpg";
import Travel from "../assets/Travel App.jpg";
import Transaction from "../assets/Transaction-Dashboard.jpg";

const Project = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with payment integration and admin dashboard.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task manager with drag-and-drop functionality.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      link: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and GSAP animations.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "SCSS", "GSAP"],
      link: "#",
      featured: true
    },
    {
      title: "Blog Platform",
      description: "Full-stack blogging platform with Markdown support.",
      image: "/api/placeholder/300/200",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      featured: true
    },
    {
      title: "Social Media App",
      description: "A real-time social media application with live chat.",
      image: "/api/placeholder/300/200",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard using OpenWeather API.",
      image: "/api/placeholder/300/200",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "#",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with payment integration and Seller Dashboard .",
      image: QuickCart,
      technologies: ["React", "Node.js", "MongoDB", "Clerk", "Cloudinary"],
      link: "https://quickcart-ecommerce-psi.vercel.app/",
      featured: true
    },
    {
      title: "Food Delivery Application",
      description:
        "A unique, responsive food delivery website UI built using React and Bootstrap. ",
      image: FoodDelivery,
      technologies: ["JavaScript", "React", "Bootstrap"],
      link: "https://food-delivery-application-brown.vercel.app/",
      featured: true
    },
    {
      title: "Travel Website",
      description:
        "A modern, responsive travel website UI built using React and SCSS. ",
      image: Travel,
      technologies: ["JavaScript", "React", "SCSS"],
      link: "https://travel-app-ten-snowy.vercel.app/",
      featured: true
    },
    {
      title: "Transactions-Dashboard Application",
      description:
        "Transactions Management Dashboard built using React and Chakra UI.",
      image: Transaction,
      technologies: ["JavaScript", "React", "Emotiion-Styled", "Chakra-UI"],
      link: "https://transactions-dashboard-ivory.vercel.app/",
      featured: true
    }
  ];

  const featuredItems = featuredProjects.filter((project) => project.featured);

  return (
    <section className={styles.projectSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {featuredItems.map((project, index) => (
            <motion.div
              key={index}
              className={`${styles.projectCard} ${styles.featured}`}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Featured badge */}
              <div className={styles.featuredBadge}></div>

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
