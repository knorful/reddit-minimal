import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "@material-ui/core";
import classes from "./App.module.css";

function App() {
  return (
    <Container>
      <div className={classes.App}>
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <aside>SubReddits</aside>
          <div>Posts Will Go Here</div>
        </main>
      </div>
    </Container>
  );
}

export default App;
