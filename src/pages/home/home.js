import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Posts } from "../../features/posts/Posts";
import { Subreddits } from "../../features/subreddits/Subreddits";
import { Container } from "@material-ui/core";
import classes from "./home.module.css";

export const Home = () => {
  return (
    <div className={classes.App}>
      <header className="App-header">
        <Navbar />
      </header>
      <Container>
        <main>
          <aside className={classes.subreddits}>
            <Subreddits />
          </aside>
          <Container style={{ padding: "0" }}>
            <Posts />
          </Container>
        </main>
      </Container>
    </div>
  );
};
