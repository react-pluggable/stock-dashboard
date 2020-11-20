import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import { Row, Container, Col } from "react-bootstrap";

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
    let Renderer = this.pluginStore.executeFunction(
      "Renderer.getRendererComponent"
    );
    this.pluginStore.executeFunction("Renderer.add", "root", () => {
      return (
        <div>
          <Row>
            <Col md={12}>
              {/* <Renderer placement="header" /> */}
              <h3>Hello James</h3>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Renderer placement="content" />
            </Col>
          </Row>
        </div>
      );
    });
  }
  deactivate(): void {}
}

export default SkeletonPlugin;
