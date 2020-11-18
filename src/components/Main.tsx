import React from "react";
import StockList from "./StockList";
import Chart from "./Chart";
function Main() {
  return (
    <div className="row m-3">
      <StockList />
      <Chart />
    </div>
  );
}

export default Main;
