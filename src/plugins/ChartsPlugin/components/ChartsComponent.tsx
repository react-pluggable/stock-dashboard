import React, { useState, useEffect } from "react";
import { Row, Dropdown, Container, Col } from "react-bootstrap";

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
    <Container>
      <Row className="justify-content-end">
        <Dropdown>
          <Dropdown.Toggle>
            {selectedChart === "" ? "Select Chart" : selectedChart}
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
      </Row>
      <Row className="mt-5">
        <Col className="chartContainer">
          {selectedChart === "" ? <p>No chart selected</p> : <ChartComponent />}
        </Col>
      </Row>
    </Container>
  );
}
