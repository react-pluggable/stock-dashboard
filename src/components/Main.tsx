import React, { useContext, useState } from "react";
import StockList from "./StockList";
import Chart from "./Chart";
import { StockContext } from "../App";
function Main() {
  const stocks = useContext(StockContext);
  const [chartStock, setChartStock] = useState(stocks[0]);

  const findStock = (id: number) => {
    let obj: any = stocks.find((stock) => stock.id == id);
    setChartStock(obj);
  };

  return (
    <div className="row m-3">
      <StockList findStock={findStock} />
      <Chart stock={chartStock} />
    </div>
  );
}

export default Main;
