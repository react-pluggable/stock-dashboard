import React from "react";
import { Row, Col, Dropdown, Container } from "react-bootstrap";
import { usePluginStore } from "react-pluggable";

export default function ChartsComponent() {
  var pluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");
  return (
    <Container>
      <Row>
        <div className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle>Pie Chart</Dropdown.Toggle>
            <Dropdown.Menu>
              <Renderer placement="dropdown" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
      <Row>
        <Renderer placement="content-chart" />
      </Row>
    </Container>
  );
}
