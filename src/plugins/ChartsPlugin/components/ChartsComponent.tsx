import React, { useState } from "react";
import { Row, Dropdown, Container } from "react-bootstrap";
import { usePluginStore } from "react-pluggable";

export default function ChartsComponent({
  installedCharts,
  selectedChart,
  setSelectedChart,
}: {
  installedCharts: Map<string, React.Component>;
  selectedChart: string;
  setSelectedChart: (chartName: string) => void;
}) {
  const [, forceUpdate] = useState<any>(null);

  let pluginStore = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

  const getChartsList = () => {
    let installedChartsNameArray: Array<string> = [];
    for (let [key, value] of installedCharts) {
      installedChartsNameArray.push(key);
    }
    return installedChartsNameArray;
  };

  let charts = getChartsList();
  console.log(selectedChart, "!!");
  return (
    <Container>
      <Row>
        <div className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle>Pie Chart</Dropdown.Toggle>
            <Dropdown.Menu>
              {charts.map((chartName: string, index: number) => {
                // const Component = chart;
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedChart("test");
                      forceUpdate(new Date());
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
