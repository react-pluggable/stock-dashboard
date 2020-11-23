import React, { useContext, useState } from "react";
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

function StocksList({
  setSelectedStock,
}: {
  setSelectedStock: (id: number) => void;
}) {
  const stocksData = useContext(StockContext);
  const [search, setSearch] = useState("");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  let filteredStocks = stocksData.stocks.filter(
    (stock) =>
      stock.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
  );
  return (
    <Col lg={4} className="mt-4">
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
                value={search}
                onChange={handleChange}
                style={{ paddingLeft: "35px" }}
              />
            </div>
          </Form>
          <Card.Text style={{ overflowX: "auto" }}>
            <ListGroup className="stockList">
              {filteredStocks.map((stock) => {
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
                      style={{ marginTop: "6px" }}
                      checked={stocksData.selectedStockId === stock.id}
                      onClick={() => setSelectedStock(stock.id)}
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
