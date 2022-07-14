import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>iPortfolio</span>
          </strong>
        </div>
        <div className="credits">
          <p>
            <span>Designed by Aviram Imber</span>
            <br />
            <span>
              Based on a template by{" "}
              <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
