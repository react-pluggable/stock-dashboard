import React, { useContext } from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import CanvasJSReact from "../../lib/canvasjs.react";
import { StockContext } from "../../App";
import LineChartComponent from "./component/LineChartComponent";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChartPlugin implements IPlugin {
  namespace = "LineChart";
  pluginStore!: PluginStore;

  getPluginName(): string {
    return `${this.namespace}@0.0.1`;
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  component = () => {
    const options = {
      title: {
        text: "Basic Column Chart in React",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  };

  activate(): void {
    // this.pluginStore.executeFunction("addChart", "line-chart", this.component);
    this.pluginStore.executeFunction(
      "Renderer.add",
      "content-chart",
      // this.component
      LineChartComponent
    );
  }

  deactivate(): void {
    //
  }
}

export default LineChartPlugin;
