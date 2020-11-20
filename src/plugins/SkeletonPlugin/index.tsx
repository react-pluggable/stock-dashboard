import React, { useState } from "react";
import { IPlugin, PluginStore } from "react-pluggable";

import SkeletonComponent from "./components/SkeletonComponent";

class SkeletonPlugin implements IPlugin {
  namespace = "Skeleton";
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
    this.pluginStore.executeFunction("Renderer.add", "root", () => (
      <SkeletonComponent />
    ));
  }
  deactivate(): void {}
}

export default SkeletonPlugin;
