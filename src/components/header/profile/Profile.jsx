import React from "react";
import "./profile.scss";
import ProfileImage from "../../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src={ProfileImage}
        className="img-fluid rounded-circle"
        alt="Yuval Efron"
      />
      <h1 className="text-light">
        <a href="#about">Yuval Efron</a>
      </h1>
      <div className="social-links mt-3 text-center">
        <a
          href="https://dblp.org/pid/232/2185.html"
          target="_blank"
          className="dblp"
          title="DBLP"
          rel="noreferrer"
        >
          <i className="bx bxl-dblp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yuval-efron-b23aa5222"
          target="_blank"
          className="linkedin"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
