import React, { Fragment } from "react";

const About = ({ iconGithub, iconLinkedin }) => {
  return (
    <Fragment>
      <h1> About this app </h1>
      <p> A simple app to find Devs on Github with the use of Github 's API </p>

      <a href="https://developer.github.com/v3/" target="_blank">
        https://developer.github.com/v3/
      </a>
      <p> Version: 1.0 </p>
      <hr />
      <br />
      <h2>About me</h2>
      <p>Hi. I'm Rodrigo Martinez M.</p>
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
        href="https://github.com/rodmartinezmedina"
        target="_blank"
        className="btn btn-secondary"
      >
        <i className={iconGithub} />
        Check my Github
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigo-martinez-medina/"
        target="_blank"
        className="btn btn-dark"
      >
        <i className={iconLinkedin} />
        Find me on Linkedin
      </a>
    </Fragment>
  );
};

About.defaultProps = {
  iconGithub: "fab fa-github",
  iconLinkedin: "fab fa-linkedin",
};

export default About;
