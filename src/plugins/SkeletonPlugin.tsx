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
        <Container>
          <Row>
            <Col md={12}>
              <Renderer placement="header" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Renderer placement="content" />
            </Col>
          </Row>
        </Container>
      );
    });
  }
  deactivate(): void {}
}

export default SkeletonPlugin;
