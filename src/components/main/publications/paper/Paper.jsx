import React from "react";
import "./paper.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MathJax } from "better-react-mathjax";

const Paper = ({ id, authors, title, link, abstract, venue }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <AnimatePresence key={id}>
      <motion.div
        layout
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        trasition={{ duration: 0.3 }}
        className="paper-container"
      >
        <div className="paper-button" onClick={() => setClicked(!clicked)}>
          <div className="paper-title">
            <h3>{title}</h3>
          </div>
          <div className="paper-details">
            <div className="authors">
              <p>
                {authors}
                <br />
                {typeof venue !== "undefined" && <strong>{venue}</strong>}
              </p>
            </div>
            <div className="paper-icons fs-5">
              <div className="paper-icons-float">
                <a
                  href=""
                  title="Expand"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <i className={`bx ${clicked ? "bx-minus" : "bx-plus"}`}></i>
                </a>
                {typeof link !== "undefined" && (
                  <a
                    href={link}
                    target="_blank"
                    title="External Link"
                    rel="noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`abstract ${clicked && "active"}`}>
          <p>
            {abstract.split(/\n[\s]+\n/).map((line, index) => {
              if (index === 0) {
                return (
                  <React.Fragment key={index}>
                    <MathJax>{line}</MathJax>
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={index}>
                  <br />
                  <MathJax>{line}</MathJax>
                </React.Fragment>
              );
            })}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Paper;
