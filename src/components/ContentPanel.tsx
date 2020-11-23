import React from "react";
import { Card, Col } from "react-bootstrap";

import { PluginStore, usePluginStore } from "react-pluggable";

function ContentPanel() {
  const pluginStore: PluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

  return (
    <Col lg={8} className="mt-4">
      <Card style={{ height: "100%" }}>
        <Card.Body className="pt-5">
          <Renderer placement="root" />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ContentPanel;
