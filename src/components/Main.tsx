import React from "react";
import { Card, Button, Form, FormControl } from "react-bootstrap";
import { Col, InputGroup } from "react-bootstrap";
import Stocks from "./Stocks";
import Chart from "./Chart";
function Main() {
  return (
    <div className="row m-3">
      <Stocks />
      <Chart />
    </div>
  );
}

const getSearchStyle = () => ({});
export default Main;
