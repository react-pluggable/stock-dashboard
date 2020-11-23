import React, { useContext } from "react";

import { Chart } from "react-charts";
import { StockContext } from "../../../App";

type Coordinate = {
  x: Date;
  y: number;
};

function LineChartComponent() {
  const stocksData = useContext(StockContext);

  let stock: any = stocksData.stocks.find(
    (stock) => stock.id === stocksData.selectedStockId
  );

  let labelData = stock.data;
  let coordinates: Array<Coordinate> = [];
  labelData.forEach((obj) => {
    let parts = obj.date.split("-");
    let date = new Date(parts[0], parts[1] - 1, parts[2]);

    coordinates.push({
      x: date,
      y: obj.value,
    });
  });

  const data = [
    {
      label: stock.name,
      data: coordinates,
    },
  ];

  const axes = [
    { primary: true, type: "time", position: "bottom" },
    { type: "linear", position: "left" },
  ];

  return (
    <div className="chart">
      <Chart data={data} axes={axes} tooltip />
    </div>
  );
}

export default LineChartComponent;
