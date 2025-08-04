import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import contactImage from "../assets/contact-me.jpg";
import "../styles/ContactInfo.scss";
import { fadeIn } from "../motion/variants";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className="contactInfo"
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="imageCart">
        <img src={contactImage} alt="Contact" className="contactImage" />
      </div>
      <div className="infoCart">
        <h3>Amena Akter</h3>
        <p>Frontend Developer | MERN Web Developer</p>
        <p>Tangail Sadar, Bangladesh</p>
        <p>
          <strong>Phone:</strong> +880 1782 197 533
        </p>
        <p>
          <strong>Email:</strong> amenaakter9714@gmail.com
        </p>
        <a href="#contactForm" className="findMe">
          Connect With Me
        </a>
        <p>I'm always open to meaningful opportunities and conversations.</p>

        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/amena-akter-49a22a251/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AmenaTalukder"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/amena34678"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/8801538331924"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
