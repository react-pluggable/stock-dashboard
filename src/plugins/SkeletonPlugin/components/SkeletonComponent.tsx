import React, { useContext } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { usePluginStore } from "react-pluggable";
import { StockContext } from "../../../App";

export default function SkeletonComponent() {
  let pluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");
  let stocksData: any = useContext(StockContext);
  let stock = stocksData.stocks.find(
    (stock) => stock.id === stocksData.selectedStockId
  );
  return (
    <div>
      <Row>
        <Col md={12}>
          <h3 className="pl-4 pb-2">{stock.name}</h3>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Renderer placement="content" />
        </Col>
      </Row>
    </div>
  );
}
