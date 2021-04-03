import React from "react";
import { Input, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./Searchbar.module.css";

export const Searchbar = () => {
  return (
    <div className={classes.Searchbar}>
      <Input
        placeholder="Search..."
        inputProps={{ "aria-label": "description" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};
