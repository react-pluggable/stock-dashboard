import React, { useContext } from "react";

import { Chart } from "react-charts";
import { StockContext } from "../../../App";

function LineChartComponent() {
  const stocksData = useContext(StockContext);

  let stock: any = stocksData.stocks.find(
    (stock) => stock.id === stocksData.selectedStockId
  );
  let labelData = stock.data;
  let coordinates = new Array();
  labelData.forEach((obj) => {
    let parts = obj.date.split("-");
    let date = new Date(parts[0], parts[1] - 1, parts[2]);

    coordinates.push({
      x: date.getDate(),
      y: obj.value,
    });
  });

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: coordinates,
      },
    ],
    [stocksData]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default LineChartComponent;
