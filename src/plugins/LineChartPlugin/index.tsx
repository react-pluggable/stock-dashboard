import React, { useContext } from "react";
import { IPlugin, PluginStore } from "react-pluggable";

import { StockContext } from "../../App";
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
    // this.pluginStore.executeFunction("addChart", "line-chart", this.component);
    this.pluginStore.executeFunction(
      "Renderer.add",
      "content-chart",
      LineChartComponent
    );
  }

  deactivate(): void {
    //
  }
}

export default LineChartPlugin;
