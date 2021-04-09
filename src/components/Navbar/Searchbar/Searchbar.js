import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchBar from "material-ui-search-bar";
import classes from "./Searchbar.module.css";
import { loadSubreddits } from "../../../features/subreddits/subredditsSlice";

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearch = () => {
    dispatch(loadSubreddits(searchTerm));
    history.push(`/subreddit/${searchTerm}`);
  };

  return (
    <div className={classes.Searchbar}>
      <SearchBar
        onChange={handleChange}
        style={{ backgroundColor: "#f7f7f7", boxShadow: "none" }}
        onRequestSearch={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
};
