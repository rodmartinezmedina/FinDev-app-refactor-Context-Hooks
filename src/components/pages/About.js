import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1> About this app </h1>
      <p> A simple app to find Devs on Github with the use of Github 's API </p>

      <a href="https://developer.github.com/v3/" target="_blank">
        https://developer.github.com/v3/
      </a>
      <p> Version: 1.0 </p>
    </Fragment>
  );
};

export default About;
