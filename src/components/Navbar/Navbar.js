import React from "react";
import { Searchbar } from "./Searchbar/Searchbar.js";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <h2>Logo will go here!</h2>
      <Searchbar />
    </div>
  );
};
