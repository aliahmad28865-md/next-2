"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCodeBranch,
  FaCogs,
} from "react-icons/fa";

import styles from "./Features.module.css";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Deployment",
    description:
      "Deploy applications in seconds with fully automated CI/CD pipelines and optimized workflows.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Native",
    description:
      "Designed for AWS, Azure, Google Cloud, and Kubernetes-based infrastructures.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    description:
      "Built with secure authentication, encrypted communication, and infrastructure protection.",
  },
  {
    icon: <FaChartLine />,
    title: "Real-Time Analytics",
    description:
      "Monitor application health, deployments, traffic, and infrastructure metrics live.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Git Integration",
    description:
      "Connect repositories and automate builds using professional Git workflows.",
  },
  {
    icon: <FaCogs />,
    title: "Smart Automation",
    description:
      "Reduce manual work using intelligent automation for deployments and operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Why Choose Us</span>

          <h2>
            Powerful Features for
            <span> Modern Development</span>
          </h2>

          <p>
            Everything you need to build, deploy, monitor, and scale modern
            applications with confidence.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <button>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}