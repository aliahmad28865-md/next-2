"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaCloud,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import styles from "./Stats.module.css";

const stats = [
  {
    icon: <FaRocket />,
    number: "250+",
    title: "Successful Deployments",
    description:
      "Applications deployed successfully across multiple cloud environments.",
  },
  {
    icon: <FaCloud />,
    number: "99.9%",
    title: "Cloud Uptime",
    description:
      "Reliable cloud infrastructure with enterprise-grade availability.",
  },
  {
    icon: <FaUsers />,
    number: "15K+",
    title: "Active Users",
    description:
      "Developers and DevOps engineers using the platform every month.",
  },
  {
    icon: <FaCheckCircle />,
    number: "100%",
    title: "Automation",
    description:
      "Automated pipelines for building, testing, and deploying applications.",
  },
];

export default function Stats() {
  return (
    <section className={styles.stats} id="stats">
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Platform Performance
          </span>

          <h2>
            Trusted by Modern
            <span> Cloud Teams</span>
          </h2>

          <p>
            Our cloud platform is built for speed, reliability,
            scalability and modern software delivery.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}