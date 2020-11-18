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

function StocksList(props: any) {
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
                return (
                  <ListGroup.Item className="d-flex">
                    <span>
                      {stock.name}&nbsp;
                      <span style={{ fontSize: "50%", color: "grey" }}>
                        INDEX
                      </span>
                    </span>
                    <span className="ml-auto" style={{ color: "grey" }}>
                      {stock.data[0].percent} &nbsp;
                    </span>
                    <input
                      type="radio"
                      name="btn"
                      id={`${stock.id}`}
                      onClick={() => props.findStock(stock.id)}
                      style={{ marginTop: "6px" }}
                    ></input>
                    &nbsp;&nbsp;
                    <span style={{ width: "75px" }}>
                      {stock.data[0].value}{" "}
                    </span>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StocksList;
