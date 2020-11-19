import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import ChartsComponent from "./components/ChartsComponent";

class ChartsPlugin implements IPlugin {
  namespace = "Charts";
  pluginStore!: PluginStore;

  private installedChart = new Map<string, React.Component>();
  private selectedChart!: string;

  setSelectedChart = (chartName: string) => {
    console.log(chartName, "!!");
    this.selectedChart = chartName;
    //@ts-ignore
    window.selectedChart = this.selectedChart;
  };

  getPluginName(): string {
    return `${this.namespace}@0.0.1`;
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  addChart = (name: string, component: React.Component) => {
    this.installedChart.set(name, component);
  };

  activate(): void {
    this.pluginStore.addFunction(
      `${this.namespace}.addChart`,
      (name: string, component: React.Component) => {
        this.addChart(name, component);
      }
    );

    this.pluginStore.executeFunction("Renderer.add", "content", () => (
      <ChartsComponent
        installedCharts={this.installedChart}
        selectedChart={this.selectedChart}
        setSelectedChart={this.setSelectedChart}
      />
    ));
  }
  deactivate(): void {
    this.pluginStore.removeFunction(`${this.namespace}.addChart`);
  }
}

export default ChartsPlugin;
