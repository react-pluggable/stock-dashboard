import React, { useContext } from "react";
import {
  Card,
  Button,
  Form,
  FormControl,
  Col,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { StockContext } from "../App";

function StocksList() {
  const stocks = useContext(StockContext);

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
              {stocks.map((stock) => {
                let keys = Object.keys(stock);
                let values = Object.values(stock);
                let data = values[0];

                if (data !== undefined) {
                  console.log(data[0]);
                  return (
                    <ListGroup.Item className="d-flex">
                      <span>
                        {keys[0]}&nbsp;{" "}
                        <span style={{ fontSize: "50%", color: "grey" }}>
                          INDEX{" "}
                        </span>
                      </span>
                      <span className="ml-auto" style={{ color: "grey" }}>
                        {data[0].percent} &nbsp;
                      </span>
                      <input type="radio" style={{ marginTop: "6px" }}></input>
                      &nbsp;&nbsp;
                      <span style={{ width: "75px" }}>{data[0].value} </span>
                    </ListGroup.Item>
                  );
                }
              })}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StocksList;
