import React, { Fragment } from "react";

const About = ({ iconGithub, iconLinkedin, iconWebsite }) => {
  return (
    <div id="about-container">
      <h1> About this app </h1>
      <p> A simple app to find Devs on Github with the use of Github 's API </p>

      <a
        href="https://developer.github.com/v3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://developer.github.com/v3/
      </a>
      <p> Version: 1.0 </p>
      <hr />
      <br />
      <h2>About me</h2>
      <h3>Hi. I'm Rodrigo Martinez M.</h3>
      <p>
        A FullStack MERN developer based in Barcelona, Catalunya/Spain and an
        enthusiast of new techs on web development
      </p>
      <p>
        I was a Music Composer, Arranger and Sessionist before becoming a full
        time dev nerd.
      </p>
      <p>
        I also hold a university degree on Graphic Design which kind of helps me
        with CSS.
      </p>
      <a
        href="https://rodmartinezmedina.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <i className={iconWebsite} />
        Personal Website
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigo-martinez-medina/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark"
      >
        <i className={iconLinkedin} />
        Find me on Linkedin
      </a>
    </div>
  );
};

About.defaultProps = {
  iconGithub: "fab fa-github",
  iconLinkedin: "fab fa-linkedin",
  iconWebsite: "fas fa-globe",
};

export default About;
