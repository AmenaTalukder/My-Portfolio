import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../styles/Services.module.scss";

const Services = () => {
  const servicesRef = useRef(null);

  const services = [
    {
      icon: "🎨",
      title: "Web Design",
      description:
        "Creating visually appealing and user-friendly web interfaces with modern design principles.",
      link: "#",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using modern technologies.",
      link: "#",
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
      featured: true
    },
    {
      icon: "⚛️",
      title: "Frontend Development",
      description:
        "Developing interactive and high-performance user interfaces with React, Next.js, and modern web technologies.",
      link: "#",
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
    }
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={servicesRef}
      id="services"
      className={styles.servicesSection}
      role="region"
      aria-labelledby="services-header"
    >
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.badge}>MY EXPERTISE</span>
        <h2 id="services-header" className={styles.title}>
          Awesome Services For You
        </h2>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className={styles.servicesGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${styles.serviceCard} ${
              service.featured ? styles.featured : ""
            }`}
            style={{ "--card-gradient": service.gradient }}
            variants={cardVariants}
            whileHover={{ y: -10, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.serviceIcon}>
              <span>{service.icon}</span>
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <Link href={service.link} legacyBehavior>
              <motion.a
                className={styles.serviceLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Service →
              </motion.a>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
