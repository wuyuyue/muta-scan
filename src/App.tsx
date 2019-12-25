import React from "react";
import logo from "./logo.png";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://github.com/nervosnetwork/muta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Muta
        </a>
      </header>
    </div>
  );
};

export default App;
