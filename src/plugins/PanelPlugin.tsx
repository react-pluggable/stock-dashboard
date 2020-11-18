import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class PanelPlugin implements IPlugin {
  namespace = "Panel";
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

  activate(): void {}
  deactivate(): void {}
}

export default PanelPlugin;
