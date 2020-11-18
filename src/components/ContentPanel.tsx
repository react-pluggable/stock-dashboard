import React, { useContext } from "react";
import { Card, Dropdown, Form, Col, Row } from "react-bootstrap";
import { StockContext } from "../App";
import {
  PluginStore,
  createPluginStore,
  RendererPlugin,
  PluginProvider,
  usePluginStore,
} from "react-pluggable";

function ContentPanel(props: any) {
  const stocks = useContext(StockContext);
  const pluginStore: PluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

  return (
    <Col lg={8}>
      <Card>
        <Card.Body className="pt-5">
          <Renderer placement={"root"} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ContentPanel;
