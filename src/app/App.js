import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Posts } from "../features/posts/Posts";
// import { Subreddits } from "../features/subreddits/Subreddits";
import { Container } from "@material-ui/core";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <header className="App-header">
        <Navbar />
      </header>
      <Container>
        <main>
          <aside className={classes.subreddits}>SubReddits</aside>
          <Container maxWidth="md">
            <Posts />
          </Container>
        </main>
      </Container>
    </div>
  );
}

export default App;
