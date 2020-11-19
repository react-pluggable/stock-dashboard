import React, { useContext } from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import AreaChartComponent from "./components/AreaChartComponent";

class AreaChartPlugin implements IPlugin {
  namespace = "AreaChart";
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
    this.pluginStore.executeFunction("Charts.addChart", "Area Chart", () => (
      <AreaChartComponent />
    ));
  }

  deactivate(): void {
    this.pluginStore.executeFunction("Renderer.remove", "content-chart", () => (
      <AreaChartComponent />
    ));
  }
}

export default AreaChartPlugin;
