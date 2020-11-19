import React from "react";
import { Row, Dropdown, Container } from "react-bootstrap";
import { usePluginStore } from "react-pluggable";

export default function ChartsComponent({
  installedCharts,
}: {
  installedCharts: Map<string, React.Component>;
}) {
  var pluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

  const getChartsList = () => {
    let installedChartsArray: Array<React.Component> = [];
    for (let [key, value] of installedCharts) {
      installedChartsArray.push(value);
    }
    return installedChartsArray;
  };

  let charts = getChartsList();

  return (
    <Container>
      <Row>
        <div className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle>Pie Chart</Dropdown.Toggle>
            <Dropdown.Menu>
              {charts.map((chart: React.Component, index: number) => {
                // const Component = chart;
                return (
                  <Dropdown.Item key={index}>
                    {/* <Component /> */}
                  </Dropdown.Item>
                );
              })}
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
