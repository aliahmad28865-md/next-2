"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "contact@myapp.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+92 300 1234567",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Pakistan",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div className={styles.container}>
        {/* Heading */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>
            Contact Us
          </span>

          <h2>
            Let's Build Something
            <span> Amazing Together</span>
          </h2>

          <p>
            Have a project, an idea, or want to
            collaborate? We'd love to hear from you.
            Send us a message and we'll get back to
            you as soon as possible.
          </p>
        </motion.div>

        <div className={styles.wrapper}>
          {/* Contact Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {contactInfo.map((item, index) => (
              <div
                className={styles.infoCard}
                key={index}
              >
                <div className={styles.icon}>
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="7"
              placeholder="Write your message..."
            />

            <button type="submit">
              <FaPaperPlane />

              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}