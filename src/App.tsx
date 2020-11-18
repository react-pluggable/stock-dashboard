import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import stocks from "./defaultValue";

export const StockContext = React.createContext(stocks);

function App() {
  const stocksCollection = useState(stocks);

  return (
    <div className="bg-light">
      <StockContext.Provider value={stocks}>
        <Header />
        <Main />
      </StockContext.Provider>
    </div>
  );
}

export default App;
