import React from "react";
import "./talks.scss";
import publications from "../../../assets/publications";

const Talks = () => {
  const talks = publications.filter((e) => e.hasOwnProperty("video_link"));

  return (
    <section id="talks" className="talks">
      <div className="talks-container">
        <div className="section-title">
          <h2>Talks</h2>
        </div>

        <div className="talks-grid">
          {talks.map(({ title, venue, paper_link, video_link }, index) => {
            return (
              <article key={index} className="talk">
                <div className="talk-video">
                  <iframe src={video_link} title={title}></iframe>
                </div>
                <div className="talk-details">
                  <div className="title">
                    <h4>{title}</h4>
                  </div>

                  <div className="conference-link">
                    <p className="conference">{venue}</p>
                    <p className="link">
                      <a href={paper_link} target="_blank" rel="noreferrer">
                        Full Paper
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Talks;
