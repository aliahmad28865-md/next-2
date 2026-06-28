"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Cloud Architect",
    company: "TechNova",
    image: "https://i.pravatar.cc/300?img=5",
    review:
      "This platform transformed the way our engineering team deploys applications. Everything feels fast, modern and incredibly reliable.",
  },
  {
    name: "David Wilson",
    role: "DevOps Engineer",
    company: "CloudStack",
    image: "https://i.pravatar.cc/300?img=12",
    review:
      "The automation features are outstanding. Deployments became easier and monitoring our infrastructure has never been simpler.",
  },
  {
    name: "Emily Brown",
    role: "Software Engineer",
    company: "Future Labs",
    image: "https://i.pravatar.cc/300?img=32",
    review:
      "Beautiful interface, excellent performance and an amazing developer experience. I highly recommend this platform.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={styles.testimonials}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>
            Testimonials
          </span>

          <h2>
            What Our
            <span> Clients Say</span>
          </h2>

          <p>
            Thousands of developers trust our platform
            to automate deployments, monitor cloud
            infrastructure and deliver software faster.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
            >
              <FaQuoteLeft
                className={styles.quote}
              />

              <div className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className={styles.review}>
                {item.review}
              </p>

              <div className={styles.user}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>

                  <span>
                    {item.role}
                  </span>

                  <small>
                    {item.company}
                  </small>
                </div>
              </div>

              <button>
                Read Story

                <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}