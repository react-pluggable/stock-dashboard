import React, { useContext } from "react";

import { Chart } from "react-charts";
import { StockContext } from "../../../App";

function LineChartComponent() {
  const stocksData = useContext(StockContext);

  let stock: any = stocksData.stocks.find(
    (stock) => stock.id === stocksData.selectedStockId
  );
  var name = stock.name;
  let labelData = stock.data;
  let coordinates = new Array();
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
    [stocksData]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  );
}

export default LineChartComponent;
