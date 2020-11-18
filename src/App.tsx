import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import stocks from "./defaultValue";

export const StockContext = React.createContext(stocks);

function App() {
  const [stocksCollection, setStocksCollection] = useState(stocks);
  const setSelectedStock = (id: number) => {
    setStocksCollection({ ...stocksCollection, selectedStockId: id });
  };

  return (
    <div className="bg-light">
      <StockContext.Provider value={stocksCollection}>
        <Header />
        <Main setSelectedStock={setSelectedStock} />
      </StockContext.Provider>
    </div>
  );
}

export default App;
