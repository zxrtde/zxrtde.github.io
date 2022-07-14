import React from "react";
import "./filter.scss";
import { useState } from "react";

const Filter = ({ setFilter }) => {
  const [activeType, setActiveType] = useState("all");
  const filters = [
    {
      text: "All",
      type: "all",
    },
    {
      text: "Working Papers",
      type: "working",
    },
    {
      text: "Conference Papers",
      type: "conference",
    },
    {
      text: "Journal Papers",
      type: "journal",
    },
  ];

  return (
    <div className="filters-container">
      <ul className="filters-list">
        {filters.map(({ text, type }) => {
          return (
            <li
              className={activeType === type ? "active" : ""}
              onClick={() => {
                setFilter(type);
                setActiveType(type);
              }}
              key={text}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
