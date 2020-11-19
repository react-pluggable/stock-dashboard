import React, { useContext } from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import AreaChartComponent from "./components/AreaChartComponent";
import { StockContext } from "../../App";

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
    this.pluginStore.executeFunction("Charts.addChart", "area-chart", () => (
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
