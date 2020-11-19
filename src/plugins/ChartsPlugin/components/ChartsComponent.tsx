import React, { useState, useEffect } from "react";
import { Row, Dropdown, Container } from "react-bootstrap";
import { usePluginStore } from "react-pluggable";

export default function ChartsComponent({
  installedCharts,
}: {
  installedCharts: Map<string, React.Component>;
}) {
  const [selectedChart, setSelectedChart] = useState("");

  useEffect(() => {
    if (installedCharts && installedCharts.size > 0) {
      setSelectedChart(installedCharts.keys().next().value);
    }
  }, [installedCharts]);

  let pluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

  const getChartsList = () => {
    let installedChartsNameArray: Array<string> = [];
    for (let [key] of installedCharts) {
      installedChartsNameArray.push(key);
    }
    return installedChartsNameArray;
  };

  let charts = getChartsList();

  return (
    <Container>
      <Row>
        <div className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle>Pie Chart</Dropdown.Toggle>
            <Dropdown.Menu>
              {charts.map((chartName: string, index: number) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedChart(chartName);
                    }}
                    key={index}
                  >
                    {chartName}
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
