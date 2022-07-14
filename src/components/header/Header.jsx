import React from "react";
import "./header.scss";
import Nav from "./nav/Nav";
import Profile from "./profile/Profile";

const Header = ({ mobileNav, setMobileNav }) => {
  return (
    <header className={!mobileNav ? "active" : ""}>
      <div className="d-flex flex-column">
        <Profile />
        <Nav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </header>
  );
};

export default Header;
