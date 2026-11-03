import React from "react";
import "./nav.scss";
import Scrollspy from "react-scrollspy";

const Nav = ({ mobileNav, setMobileNav }) => {
  const navOptions = [
    {
      id: "1",
      link: "#about",
      icon: "bx-user",
      text: "About",
    },
    {
      id: "2",
      link: "#publications",
      icon: "bx-book",
      text: "Publications",
    },
    {
      id: "3",
      link: "#talks",
      icon: "bx-microphone",
      text: "Talks",
    },
  ];

  return (
    <div className="nav-menu navbar">
      <ul>
        <Scrollspy
          items={navOptions.map((option) => option.link.substring(1))}
          currentClassName="active"
          offset={-12}
        >
          {navOptions.map(({ id, link, icon, text }) => {
            return (
              <li key={id}>
                <a
                  href={link}
                  onClick={() => {
                    setMobileNav(!mobileNav);
                  }}
                  className="nav-link scrollto"
                >
                  <i className={`bx ${icon}`}></i> <span>{text}</span>
                </a>
              </li>
            );
          })}
        </Scrollspy>
        <li>
          <address className="contact-email">
            <i className="bx bx-envelope" aria-hidden="true"></i>
            <span>efronyuv [at] ias [dot] edu</span>
          </address>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
