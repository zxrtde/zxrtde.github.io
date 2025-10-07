import React from "react";
import "./nav.scss";
import CV from "../../../assets/Yuval_Efron_CV.pdf";
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
          <a
            href={CV}
            target="_blank"
            className="nav-link scrollto"
            rel="noopener noreferrer"
          >
            <i className="bx bx-file-blank"></i> <span>CV</span>
          </a>
        </li>
        <li>
          <a
            onClick={(event) => {
              window.open("mailto:Efronyuv@gmail.com", "_blank");
              event.preventDefault();
            }}
            href="mailto:Efronyuv@gmail.com"
            className="nav-link scrollto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
