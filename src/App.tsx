import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Main />
    </div>
  );
}

export default App;
