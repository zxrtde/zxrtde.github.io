import React from "react";
import "./filter.scss";
import { useState } from "react";

const Filter = ({ setFilter }) => {
  const [activeType, setActiveType] = useState("paper");
  const filters = [
    {
      text: "Papers",
      type: "paper",
    },
    {
      text: "Blog Posts",
      type: "blog",
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
