import React from "react";
import SearchBar from "material-ui-search-bar";
import classes from "./Searchbar.module.css";

export const Searchbar = () => {
  return (
    <div className={classes.Searchbar}>
      <SearchBar style={{ backgroundColor: "#f7f7f7" }} />
    </div>
  );
};
