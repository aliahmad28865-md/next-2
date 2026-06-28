"use client";

import { motion } from "framer-motion";
import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <section className={styles.dashboardSection} id="dashboard">

      <div className={styles.container}>

        {/* LEFT SIDE */}

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className={styles.tag}>
            Dashboard Preview
          </span>

          <h2>
            Control Your Entire
            <span> Cloud Infrastructure </span>
            From One Dashboard
          </h2>

          <p>
            Monitor deployments, containers, cloud resources and CI/CD
            pipelines in one beautiful modern interface designed for
            developers and DevOps engineers.
          </p>

          <ul className={styles.list}>

            <li>
              <FaCheckCircle />
              Real-time Monitoring
            </li>

            <li>
              <FaCheckCircle />
              Automated Deployment
            </li>

            <li>
              <FaCheckCircle />
              Cloud Ready
            </li>

            <li>
              <FaCheckCircle />
              Secure Infrastructure
            </li>

          </ul>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className={styles.dashboard}>

            <div className={styles.topBar}>

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className={styles.content}>

              <div className={styles.bigCard}>

                <FaCloud />

                <h3>Cloud Status</h3>

                <h1>99.9%</h1>

                <p>Infrastructure Healthy</p>

              </div>

              <div className={styles.smallCard}>

                <FaServer />

                <h4>Servers</h4>

                <h2>48</h2>

              </div>

              <div className={styles.smallCard}>

                <FaDatabase />

                <h4>Databases</h4>

                <h2>12</h2>

              </div>

              <div className={styles.bottomCard}>

                <FaShieldAlt />

                <div>

                  <h3>Security</h3>

                  <p>Protected</p>

                </div>

                <div className={styles.green}></div>

              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <motion.div

            className={styles.floatOne}

            animate={{
              y:[-15,15,-15]
            }}

            transition={{
              repeat:Infinity,
              duration:5
            }}

          >

            🚀 Auto Deployment

          </motion.div>

          <motion.div

            className={styles.floatTwo}

            animate={{
              y:[15,-15,15]
            }}

            transition={{
              repeat:Infinity,
              duration:6
            }}

          >

            ☁ Cloud Ready

          </motion.div>

        </motion.div>

      </div>

    </section>
  );

}