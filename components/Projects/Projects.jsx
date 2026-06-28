"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaAws,
  FaReact,
} from "react-icons/fa";
import { SiGithubactions, SiKubernetes } from "react-icons/si";

import styles from "./Projects.module.css";

const projects = [
  {
    title: "Cloud CI/CD Pipeline",
    image: "/images/project1.jpg",
    description:
      "A modern CI/CD pipeline using GitHub Actions, Docker, and automated deployment workflows.",

    tech: [
      "GitHub Actions",
      "Docker",
      "CI/CD",
    ],

    icon: <SiGithubactions />,
  },

  {
    title: "Docker Deployment",

    image: "/images/project2.jpg",

    description:
      "Containerized web applications with Docker Compose and production-ready deployment.",

    tech: [
      "Docker",
      "Linux",
      "Compose",
    ],

    icon: <FaDocker />,
  },

  {
    title: "AWS Infrastructure",

    image: "/images/project3.jpg",

    description:
      "Cloud infrastructure deployment using AWS services with secure networking and monitoring.",

    tech: [
      "AWS",
      "EC2",
      "Cloud",
    ],

    icon: <FaAws />,
  },

  {
    title: "Kubernetes Cluster",

    image: "/images/project4.jpg",

    description:
      "Scalable Kubernetes environment with rolling updates, autoscaling and monitoring.",

    tech: [
      "Kubernetes",
      "Docker",
      "Helm",
    ],

    icon: <SiKubernetes />,
  },

  {
    title: "Next.js Dashboard",

    image: "/images/project5.jpg",

    description:
      "Premium admin dashboard built with Next.js, Framer Motion and reusable components.",

    tech: [
      "Next.js",
      "React",
      "Motion",
    ],

    icon: <FaReact />,
  },

  {
    title: "Cloud Monitoring",

    image: "/images/project6.jpg",

    description:
      "Real-time monitoring platform for cloud resources with analytics and health dashboards.",

    tech: [
      "Monitoring",
      "Cloud",
      "Analytics",
    ],

    icon: <FaAws />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Portfolio
          </span>

          <h2>
            Featured
            <span> Projects</span>
          </h2>

          <p>
            Explore some cloud, DevOps and web
            development projects demonstrating
            automation, scalability and modern
            engineering practices.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className={styles.imageBox}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <button>
                    <FaGithub />
                  </button>

                  <button>
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.projectIcon}>
                  {project.icon}
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className={styles.tech}>
                  {project.tech.map((item, i) => (
                    <span key={i}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}