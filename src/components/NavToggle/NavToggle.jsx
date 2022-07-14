import React from "react";
import "./navToggle.scss";

const NavToggle = ({ mobileNav, setMobileNav }) => {
  return (
    <i
      className={`bi ${
        mobileNav ? "bi-list" : "bi-x"
      } mobile-nav-toggle new-none`}
      onClick={() => setMobileNav(!mobileNav)}
    ></i>
  );
};

export default NavToggle;
