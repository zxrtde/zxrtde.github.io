import React from "react";
import "./publications.scss";
import publications from "../../../assets/publications";
import Paper from "./paper/Paper";
import Filter from "./filter/Filter";
import { useState } from "react";
import { motion } from "framer-motion";

const Publications = () => {
  const [filteredPapers, setfilteredPapers] = useState(publications);

  const setFilter = (type) => {
    if (type === "all") {
      setfilteredPapers(publications);
      return;
    }
    setfilteredPapers(publications.filter((paper) => paper.type === type));
  };

  return (
    <section id="publications" className="publications section-bg">
      <div className="publications-container">
        <div className="section-title">
          <h2>Publications</h2>
        </div>
        <div className="filters">
          <Filter setFilter={setFilter} />
        </div>

        <motion.div layout className="papers">
          {filteredPapers.map(
            ({ authors, title, type, paper_link, abstract, venue }, index) => {
              return (
                <Paper
                  id={index}
                  authors={authors}
                  title={title}
                  link={paper_link}
                  abstract={abstract}
                  venue={venue}
                  key={index}
                />
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
