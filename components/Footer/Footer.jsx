"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Projects", href: "#projects" },
];

const resources = [
  { name: "Documentation", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Brand */}
          <div className={styles.brand}>
            <h2>My App</h2>

            <p>
              Modern cloud solutions powered by
              Next.js, DevOps, Docker, Kubernetes,
              AWS and GitHub Actions.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>

              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3>Resources</h3>

            <ul className={styles.links}>
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3>Newsletter</h3>

            <p className={styles.newsText}>
              Subscribe to receive updates about
              cloud technologies, DevOps and new
              features.
            </p>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
              />

              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} My App.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={styles.topButton}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}