import React from "react";
import styles from "../styles/Project.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/variants";
import QuickCart from "../assets/QuickCart.jpg";
import FoodDelivery from "../assets/food-delivery.jpg";
import Travel from "../assets/Travel App.jpg";
import Transaction from "../assets/Transaction-Dashboard.jpg";
import FreshFood from "../assets/Fresh-Food.jpg";
import LearnFlow from "../assets/learnFlow.jpg";

const Project = () => {
  const featuredProjects = [
    {
        title: "Hotel Management System",
        description:
        "✨A full-featured hotel management system built with React and Vite, focused on delivering a smooth and user-friendly booking experience. Users can browse rooms, explore exclusive offers, and interact with a clean, responsive UI optimized for all devices.",
      image: HotelManagement,
      technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      link: "https://hotel-management-joe4kelbk-amenatalukders-projects.vercel.app/",
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
    },
    {
      title: "Online Sushi Ordering Platform",
      description:
        "✨This project is a modern, responsive, and interactive online sushi ordering web application built with React and Tailwind CSS. It simulates a user-friendly food ordering experience, complete with a dynamic menu, detailed order modals, and responsive mobile navigation",
      image: FreshFood,
      technologies: ["JavaScript", "React", "Tailwind", "Clerk", "Emailjs"],
      link: "https://frontend-green-three-12.vercel.app/",
      featured: true
    },
    {
      title: "Online Education Site",
      description:
        "✨LearnFlow – Online Education Platform (Frontend) LearnFlow is a modern, responsive, and fully functional frontend interface for an online education platform. Designed with user experience in mind, LearnFlow helps students discover courses, connect with mentors, and explore blog content—all in one seamless interface.",
      image: LearnFlow,
      technologies: ["JavaScript", "React", "Tailwind", "css"],
      link: "https://online-education-nine-tau.vercel.app/",
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
