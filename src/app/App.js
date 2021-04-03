import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="xl">
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    </Container>
  );
}

export default App;
