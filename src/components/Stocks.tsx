import React from "react";
import {
  Card,
  Button,
  Form,
  FormControl,
  Col,
  InputGroup,
  ListGroup,
} from "react-bootstrap";

function Stocks() {
  return (
    <Col lg={4}>
      <Card>
        <Card.Body>
          <Card.Title>Stocks</Card.Title>
          <Form className="my-5">
            <div className="position-relative">
              <i
                className="fa fa-search position-absolute"
                aria-hidden="true"
                style={{ top: "11px", left: "11px" }}
              ></i>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                style={{ paddingLeft: "35px" }}
              />
            </div>
          </Form>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item className="d-flex">
                <span>
                  Sensex&nbsp;{" "}
                  <span style={{ fontSize: "50%", color: "grey" }}>INDEX </span>
                </span>
                <span className="ml-auto" style={{ color: "grey" }}>
                  0.00% &nbsp;
                </span>
                <input type="radio" style={{ marginTop: "6px" }}></input>
                &nbsp;&nbsp;
                <span style={{ width: "75px" }}>43637.98 </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span>
                  NIFTY 50&nbsp;{" "}
                  <span style={{ fontSize: "50%", color: "grey" }}>INDEX </span>
                </span>
                <span className="ml-auto" style={{ color: "grey" }}>
                  0.00% &nbsp;
                </span>
                <input type="radio" style={{ marginTop: "6px" }}></input>
                &nbsp;&nbsp;
                <span style={{ width: "75px" }}>12780.25 </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span>
                  LT&nbsp; <span style={{ fontSize: "50%" }}>BSE </span>
                </span>
                <span className="ml-auto" style={{ color: "grey" }}>
                  0.00% &nbsp;
                </span>
                <input type="radio" style={{ marginTop: "6px" }}></input>
                &nbsp;&nbsp;
                <span style={{ width: "75px" }}>1059.10 </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span>
                  Sensex&nbsp;{" "}
                  <span style={{ fontSize: "50%", color: "grey" }}>INDEX </span>
                </span>
                <span className="ml-auto" style={{ color: "grey" }}>
                  0.00% &nbsp;
                </span>
                <input type="radio" style={{ marginTop: "6px" }}></input>
                &nbsp;&nbsp;
                <span style={{ width: "75px" }}>43637.98 </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <span>
                  Sensex&nbsp;{" "}
                  <span style={{ fontSize: "50%", color: "grey" }}>INDEX </span>
                </span>
                <span className="ml-auto" style={{ color: "grey" }}>
                  0.00% &nbsp;
                </span>
                <input type="radio" style={{ marginTop: "6px" }}></input>
                &nbsp;&nbsp;
                <span style={{ width: "75px" }}>43637.98 </span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Stocks;
