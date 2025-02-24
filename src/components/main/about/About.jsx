import React from "react";
import "./about.scss";
import Pointing from "../../../assets/pointing.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="content">
          <motion.div
            className="picture"
            initial={{ x: "-20%", opacity: 0.5 }}
            animate={{ x: "0%", opacity: 1 }}
            trasition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img src={Pointing} className="img-fluid" alt="" />
          </motion.div>
          <motion.div
            className="text"
            initial={{ x: "20%" }}
            animate={{ x: "0%" }}
            trasition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p>
              I am <strong>Yuval Efron</strong>, a PhD student at the department
              of computer science at Columbia University, under the marvelous
              advisement of <strong>Prof. Toniann Pitassi</strong>.
            </p>
            <p>
              My research interests revolve around theoretical computer science,
              with a specific emphasis on the foundations of blockchains and related topics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
