import React from "react";
import Hero from "./Hero";
import Features from "./Features";

const Home = () => {
  return (
    <div className="px-5 sm:px-10 mb-10">
      <Hero></Hero>
      <Features></Features>
    </div>
  );
};

export default Home;
