import React from "react";
import "./backToTop.scss";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  });

  return (
    <a
      href="#about"
      className={`back-to-top d-flex align-items-center justify-content-center ${
        isActive && "active"
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTop;
