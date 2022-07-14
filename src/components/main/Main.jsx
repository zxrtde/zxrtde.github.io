import React from "react";
import About from "./about/About";
import Publications from "./publications/Publications";
import "./main.scss";
import Talks from "./talks/Talks";

const Main = () => {
  return (
    <main>
      <About />
      <Publications />
      <Talks />
    </main>
  );
};

export default Main;
