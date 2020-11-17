import React, { useContext } from "react";
import { Card, Dropdown, Form, Col, Row } from "react-bootstrap";
import { StockContext } from "../App";

function Chart() {
  const stocks = useContext(StockContext);

  return (
    <Col lg={8}>
      <Card>
        <Card.Body>
          <Card.Title className="mt-5 ml-3">
            <h2>
              Hello <b>James</b>
            </h2>
          </Card.Title>
          <Card.Text>
            <Row>
              <Col sm={7}>Pie chart</Col>
              <Col sm={5}>
                <div className="d-flex">
                  <Dropdown className="ml-auto">
                    <Dropdown.Toggle>Pie Chart</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Pie Chart</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Bar Chart</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Line Chart
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="mt-5">
                  <span style={{ fontSize: "30px" }}>34.00</span>&nbsp;
                  <span style={{ color: "grey" }}>USD&nbsp;</span>
                  <span className="text-success">
                    +.28 (0.83%) <i className="fa fa-arrow-up"></i>
                  </span>
                  <br />
                  <small style={{ color: "grey" }}>
                    13 Nov, 4:00 pm GMT-5 Disclaimer
                  </small>
                </div>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Chart;
