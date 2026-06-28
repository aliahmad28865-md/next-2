"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaDocker,
  FaAws,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        {/* Left Side */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className={styles.badge}>
            🚀 Modern Cloud Platform
          </span>

          <h1>
            Build Powerful
            <span> Cloud Solutions </span>
            With Modern DevOps
          </h1>

          <p>
            Experience a futuristic platform designed for cloud engineers,
            developers and DevOps professionals. Deploy faster, automate
            smarter and monitor everything from one dashboard.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>
              Get Started
              <FaArrowRight />
            </button>

            <button className={styles.secondary}>
              Explore
            </button>
          </div>

          <div className={styles.tech}>
            <div>
              <FaGithub />
            </div>

            <div>
              <FaDocker />
            </div>

            <div>
              <SiGithubactions />
            </div>

            <div>
              <SiKubernetes />
            </div>

            <div>
              <FaAws />
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.dashboard}>
            <div className={styles.windowTop}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.screen}>
              <div className={styles.cardOne}>
                <h3>CI/CD</h3>
                <p>Successful Deployments</p>

                <h2>99.9%</h2>
              </div>

              <div className={styles.cardTwo}>
                <h3>Servers</h3>

                <div className={styles.progress}>
                  <span></span>
                </div>

                <p>Running Smoothly</p>
              </div>

              <div className={styles.cardThree}>
                <h3>Cloud Status</h3>

                <div className={styles.circle}></div>

                <h2>ONLINE</h2>
              </div>
            </div>
          </div>

          <motion.div
            className={styles.floatingCard}
            animate={{
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            ⚡ Automated Workflow
          </motion.div>

          <motion.div
            className={styles.floatingCard2}
            animate={{
              y: [15, -15, 15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            ☁ Cloud Ready
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}