import React from "react";
import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar/Searchbar.js";
import { Container } from "@material-ui/core";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Container>
        <div className={classes.NavbarContent}>
          <Link className={classes.logo} to="/">
            <h2>
              Reddit <span>Minimal</span>
            </h2>
          </Link>
          <Searchbar />
        </div>
      </Container>
    </div>
  );
};
