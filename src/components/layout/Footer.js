import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ iconGithub, iconLinkedin }) => {
  return (
    <div>
      <nav className="footer bg-secondary">
        <ul>
          <li>
            <a href="">
              <i className={iconGithub} /> Visit my Github
            </a>
          </li>
          <li>
            <a href="">
              <i className={iconLinkedin} /> Contact me on Linkedin
            </a>
          </li>
          <li>@rodmartinezmedina</li>
        </ul>
      </nav>
    </div>
  );
};

Footer.defaultProps = {
  iconGithub: "fab fa-github",
  iconLinkedin: "fab fa-linkedin",
};

Footer.propTypes = {
  iconGithub: PropTypes.string.isRequired,
  iconLinkedin: PropTypes.string.isRequired,
};

export default Footer;
