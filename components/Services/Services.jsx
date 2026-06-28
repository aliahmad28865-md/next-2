"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaDocker,
  FaServer,
  FaShieldAlt,
  FaCodeBranch,
} from "react-icons/fa";

import { SiGithubactions } from "react-icons/si";

import styles from "./Services.module.css";

const services = [
  {
    icon: <SiGithubactions />,
    title: "CI / CD Pipelines",
    desc: "Automate testing, builds and deployments using modern GitHub Actions workflows."
  },
  {
    icon: <FaDocker />,
    title: "Containerization",
    desc: "Package applications into lightweight containers for consistent deployments."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Infrastructure",
    desc: "Deploy scalable applications across cloud platforms with confidence."
  },
  {
    icon: <FaServer />,
    title: "Server Management",
    desc: "Monitor servers and maintain high availability with modern tooling."
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    desc: "Protect applications with secure deployment pipelines and best practices."
  },
  {
    icon: <FaCodeBranch />,
    title: "Version Control",
    desc: "Collaborate efficiently using Git workflows and branch strategies."
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Everything you need to build, deploy and manage modern cloud applications.
      </motion.p>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button>Learn More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}