import React, { useState } from "react";
import "../styles/Contact.scss";
import ContactInfo from "./ContactInfo";
import { fadeIn } from "../motion/variants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showFormOnly = queryParams.get("form") === "true";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date().toLocaleString();

    const templateParams = {
      ...formData,
      time: now
    };

    emailjs
      .send(
        "service_yrml9dx",
        "template_rlrxzsl",
        templateParams,
        "9zQHMumB8rgtTIr12"
      )
      .then(
        () => {
          alert(
            "Thanks for reaching out! Your message has been sent successfully."
          );
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div id="contactForm" className="contactPage">
      {!showFormOnly && <ContactInfo />}
      <motion.div
        className="container"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Let’s Work Together</h2>
        <p>
          Have a project in mind or just want to connect? I’m open to
          collaborations, opportunities, or a quick chat over tech!
        </p>
        <div id="contactForm">
          <form onSubmit={handleSubmit} className="contactForm">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
