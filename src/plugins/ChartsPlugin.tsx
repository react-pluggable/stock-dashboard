import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class ChartsPlugin implements IPlugin {
  namespace = "Charts";
  pluginStore!: PluginStore;

  private installedChart = new Map<string, React.Component>();
  private selectedChart!: string;

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
      this.addChart.bind(this)
    );
  }
  deactivate(): void {
    this.pluginStore.removeFunction(`${this.namespace}.addChart`);
  }
}

export default ChartsPlugin;
