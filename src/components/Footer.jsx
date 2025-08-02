import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="siteFooter">
      <div className="footerContent">
        <p>© {new Date().getFullYear()} Amena Akter. All rights reserved.</p>
        <div className="footerLinks">
          <a
            href="https://www.linkedin.com/in/amena-akter-49a22a251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/amena34678"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/AmenaTalukder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
