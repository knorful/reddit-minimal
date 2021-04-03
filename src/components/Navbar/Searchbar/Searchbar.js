import React from "react";
import { Input } from "@material-ui/core";
import classes from "./Searchbar.module.css";

export const Searchbar = () => {
  return (
    <div className={classes.Searchbar}>
      <Input
        placeholder="Search"
        inputProps={{ "aria-label": "description" }}
      />
    </div>
  );
};
