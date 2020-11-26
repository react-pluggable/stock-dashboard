import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar className="py-4" expand="lg" bg="white">
        <Navbar.Brand
          href="#home"
          className="ml-3"
          style={{ fontSize: "30px" }}
        >
          <span style={{ color: "grey" }}> &#128200;Sample </span>Stock
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
