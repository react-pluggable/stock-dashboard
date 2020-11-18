import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import { Row, Col, Dropdown, Container } from "react-bootstrap";

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

  component = () => {
    let Renderer = this.pluginStore.executeFunction(
      "Renderer.getRendererComponent"
    );
    return (
      <Container>
        <Row>
          <div className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle>Pie Chart</Dropdown.Toggle>
              <Dropdown.Menu>
                {this.installedChart.forEach((value, key, map) => (
                  <Dropdown.Item href="#/action-1">{key}</Dropdown.Item>
                ))}

                {/* <Dropdown.Item href="#/action-3">Line Chart</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>
        <Row>
          <Renderer placement="content-chart" />
        </Row>
      </Container>
    );
  };

  activate(): void {
    this.pluginStore.addFunction(
      `${this.namespace}.addChart`,
      this.addChart.bind(this)
    );

    this.pluginStore.executeFunction("Renderer.add", "content", this.component);
  }
  deactivate(): void {
    this.pluginStore.removeFunction(`${this.namespace}.addChart`);
  }
}

export default ChartsPlugin;
