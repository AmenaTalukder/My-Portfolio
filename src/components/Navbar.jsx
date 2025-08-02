import { useState, useEffect } from "react";
import { MdMenuOpen } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Navigation items
  const navItems = [
    { label: "Home", path: "/", id: "home" },
    { label: "About Me", path: "/about", id: "about" },
    { label: "Skills", path: "/skill", id: "skills" },
    { label: "Services", path: "/service", id: "service" },
    { label: "Projects", path: "/project", id: "projects" },
    { label: "Contact", path: "/contact", id: "contact" }
  ];

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.navbarContainer}>
        {/* Brand Logo */}
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.navbarBrandLink}>
            Amena
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className={styles.navbarMenu}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navbarItem}>
              <Link
                to={item.path}
                className={styles.navbarLink}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className={styles.navbarActions}>
          <Link to="/contact?form=true" className={styles.navbarCta}>
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.navbarToggle}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <AiFillCloseCircle className={styles.navbarIcon} />
          ) : (
            <MdMenuOpen className={styles.navbarIcon} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
        }`}
        aria-hidden={!isOpen}
      >
        <ul className={styles.mobileMenuList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.mobileMenuItem}>
              <Link
                to={item.path}
                className={styles.mobileMenuLink}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileMenuItem}>
            <Link
              to="/contact?form=true"
              className={styles.mobileMenuCta}
              onClick={closeMobileMenu}
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={styles.navbarOverlay}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
