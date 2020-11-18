import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";

class AuthPlugin implements IPlugin {
  namespace = "Auth";
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

export default AuthPlugin;
