import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class ContentPlugin implements IPlugin {
  namespace = "Content";
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
    //
  }
  deactivate(): void {
    //
  }
}

export default ContentPlugin;
