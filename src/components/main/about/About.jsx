import React from "react";
import "./about.scss";
import AboutPhoto from "../../../assets/about-photo.png";
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
            <img src={AboutPhoto} className="img-fluid" alt="" />
          </motion.div>
          <motion.div
            className="text"
            initial={{ x: "20%" }}
            animate={{ x: "0%" }}
            trasition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p>
              I am <strong>Yuval Efron</strong>, I recently finished my PhD at the department
              of computer science at Columbia University, under the marvelous
              advisement of <a href="https://www.cs.columbia.edu/~toni/" target="_blank" rel="noopener noreferrer"><strong>Prof. Toniann Pitassi</strong></a>.
              In Fall 2026, I will start as a postdoctoral member at the School of Math, <a href="https://www.ias.edu/math" target="_blank" rel="noopener noreferrer">Institute for Advanced Study</a>.
            </p>
            <p>
              My research interests revolve around theoretical computer science.
            </p>
            {/*
            <p>
              My research interests revolve around theoretical computer science,
              with a specific emphasis on the foundations of blockchains and related topics.
            </p>

            <p>
              My PhD research has been generously supported by a <a href="https://pbs.foundation/" target="_blank" rel="noopener noreferrer">PBS foundation</a> grant, and a <a href="https://x.com/cu_eth_research" target="_blank" rel="noopener noreferrer">Columbia-Ethereum</a> PhD fellowship.
            </p>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
