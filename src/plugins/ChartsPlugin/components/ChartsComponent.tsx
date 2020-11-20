import React, { useState, useEffect, useContext } from "react";
import { Row, Dropdown, Container, Col } from "react-bootstrap";
import { usePluginStore } from "react-pluggable";

import LineChartComponent from "../../LineChartPlugin/component/LineChartComponent";

export default function ChartsComponent({
  installedCharts,
}: {
  installedCharts: Map<string, JSX.Element>;
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

  let ChartComponent: any = installedCharts.get(selectedChart);

  return (
    <div>
      <Row>
        <div className="ml-auto mr-3">
          <Dropdown>
            <Dropdown.Toggle>
              {selectedChart === "" ? "Selected Chart" : selectedChart}
            </Dropdown.Toggle>
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
      <Row className="mt-5">
        <Col sm={8}>
          {selectedChart === "" ? <p>No chart selected</p> : <ChartComponent />}
        </Col>
        <Col sm={4}>
          <div
            className="p-5"
            style={{
              borderLeft: "1px solid lightslategray",
              marginTop: "100px",
              height: "200px",
            }}
          >
            Demo Data
          </div>
        </Col>
      </Row>
    </div>
  );
}
