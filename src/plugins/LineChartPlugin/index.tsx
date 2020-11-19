import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

import LineChartComponent from "./component/LineChartComponent";

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

  activate(): void {
    this.pluginStore.executeFunction("Charts.addChart", "Line Chart", () => (
      <LineChartComponent />
    ));
  }

  deactivate(): void {
    this.pluginStore.executeFunction("Renderer.remove", "content-chart", () => (
      <LineChartComponent />
    ));
  }
}

export default LineChartPlugin;
