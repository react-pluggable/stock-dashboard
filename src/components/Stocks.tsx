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
    <div className="col-4">
      <Card>
        <Card.Body>
          <Card.Title>Stocks</Card.Title>
          <Form className="my-5">
            {/* <div>
              <i
                className="fa fa-search"
                aria-hidden="true"
                style={{
                  backgroundColor: "transparent",
                  borderRight: "transparent",
                }}
              ></i>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              ></input>
            </div> */}

            {/* <div className="ml-2 ml-sm-auto position-relative">
              <input
                id="searchBar"
                type="text"
                placeholder="search"
                className="rounded-pill d-none d-md-inline"
                style={{ outline: "none" }}
              />
              <button
                id="searchBtn"
                className="position-absolute bg-transparent pt-1 border-0"
              >
                <i className="fa fa-search"></i>
              </button>
            </div> */}
            {/* <Col xs="auto"> */}
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i
                    className="fa fa-search"
                    aria-hidden="true"
                    style={{
                      backgroundColor: "transparent",
                      borderRight: "transparent",
                    }}
                  ></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="demo"
                id="inlineFormInputGroup"
                placeholder="Search"
                style={{ borderLeft: "transparent" }}
              />
            </InputGroup>
            {/* </Col> */}
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
    </div>
  );
}

export default Stocks;

/* <div className="row">
                <span className="col-4">
                  Sensex&nbsp; <span style={{ fontSize: "50%" }}>INDEX </span>
                </span>
                <span className="col-2">0.00%</span>
                <input
                  type="radio"
                  style={{ marginTop: "6px" }}
                  className="col-1"
                ></input>

                <span className="col-3">43637.98 </span>
              </div> */
