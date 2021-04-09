import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./Searchbar.module.css";
import { loadSubreddits } from "../../../features/subreddits/subredditsSlice";

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target }) => {
    const term = target.value;
    setSearchTerm(term);
  };

  const handleSearch = () => {
    dispatch(loadSubreddits(searchTerm));
    history.push(`/subreddit/${searchTerm}`);
  };

  return (
    <div className={classes.Searchbar}>
      <form onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          placeholder="Search..."
          aria-label="Search Button"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
