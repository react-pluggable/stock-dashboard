import React, { useContext } from "react";

import { Chart } from "react-charts";
import { StockContext } from "../../../App";

function LineChartComponent() {
  const stocksData = useContext(StockContext);

  let stock: any = stocksData.stocks.find(
    (stock) => stock.id === stocksData.selectedStockId
  );

  let labelData = stock.data;
  let coordinates: Array<{ x: any; y: any }> = [];

  labelData.forEach((obj) => {
    let parts = obj.date.split("-");
    let date = new Date(parts[0], parts[1] - 1, parts[2]);

    coordinates.push({
      x: date,
      y: obj.value,
    });
  });

  const data = React.useMemo(
    () => [
      {
        label: stock.name,
        data: coordinates,
      },
    ],
    [stock.name, coordinates]
  );

  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "time" },
      { position: "left", type: "linear", stacked: true },
    ],
    []
  );

  return (
    <div className="chart">
      <Chart series={series} data={data} axes={axes} tooltip />
    </div>
  );
}

export default LineChartComponent;
