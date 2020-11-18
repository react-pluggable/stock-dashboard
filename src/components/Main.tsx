import React, { useContext, useState } from "react";
import StockList from "./StockList";
import Chart from "./Chart";
import { StockContext } from "../App";
function Main({
  setSelectedStock,
}: {
  setSelectedStock: (id: number) => void;
}) {
  return (
    <div className="row m-3">
      <StockList setSelectedStock={setSelectedStock} />
      <Chart stock={setSelectedStock} />
    </div>
  );
}

export default Main;
