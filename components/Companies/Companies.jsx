"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si";

import styles from "./Companies.module.css";

const companies = [
  {
    icon: <FaGithub />,
    name: "GitHub",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
  },
  {
    icon: <SiGithubactions />,
    name: "GitHub Actions",
  },
  {
    icon: <SiKubernetes />,
    name: "Kubernetes",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <FaLinux />,
    name: "Linux",
  },
];

export default function Companies() {
  return (
    <section className={styles.companies}>
      <h2>
        Trusted Technologies
      </h2>

      <div className={styles.grid}>
        {companies.map((item, index) => (
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
              {item.icon}
            </div>

            <h3>{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}