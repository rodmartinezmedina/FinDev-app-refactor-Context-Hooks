import React, { useState, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";
import AlertContext from "../../contexts/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter text for search", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  //here we are passing props up to the App.js component.
  // we will have ghe searchUsers function there

  return (
    <div>
      <form onSubmit={onSubmit} className="form text-center">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
          className="search-input"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
