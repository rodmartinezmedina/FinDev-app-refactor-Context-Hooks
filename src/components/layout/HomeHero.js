import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div id="hero-big-container">
      <section className="hero welcome-hero">
        <h1>Welcome to FindDev</h1>
        <h3>Search for developers on Github...</h3>
        {/* <img
          className="hero-welcome-img"
          src="/images/agenda-phone-crop.jpg"
          alt="rodrigoPhoto"
        /> */}
      </section>
    </div>
  );
};

export default HomeHero;
