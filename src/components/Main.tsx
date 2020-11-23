import React from "react";
import StockList from "./StockList";
import ContentPanel from "./ContentPanel";

function Main({
  setSelectedStock,
}: {
  setSelectedStock: (id: number) => void;
}) {
  return (
    <div className="row m-3">
      <StockList setSelectedStock={setSelectedStock} />
      <ContentPanel />
    </div>
  );
}

export default Main;
