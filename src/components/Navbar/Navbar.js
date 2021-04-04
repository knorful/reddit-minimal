import React from "react";
import { Searchbar } from "./Searchbar/Searchbar.js";
import { Container } from "@material-ui/core";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Container>
        <div className={classes.NavbarContent}>
          <h2>
            Reddit <span>Minimal</span>
          </h2>
          <Searchbar />
        </div>
      </Container>
    </div>
  );
};
