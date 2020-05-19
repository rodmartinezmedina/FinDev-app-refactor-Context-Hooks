import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, name, avatar_url, html_url } }) => {
  //OPTION 2 RO PASS THE PROPS
  // const UserItem = (props) => {
  // const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "70px" }}
        alt="user-pic"
      />
      <h3> {login} </h3> <p> {name} </p>
      <div>
        <Link to={`user/${login}`} className="btn btn-primary btn-sm my">
          More Info
        </Link>
      </div>
      <div>
        <a href={html_url} className="btn btn-secondary btn-sm" target="_blank">
          Github page
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
