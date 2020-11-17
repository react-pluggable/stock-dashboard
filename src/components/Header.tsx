import React from "react";
import {
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar className="py-4" expand="lg" bg="white">
        <Navbar.Brand
          href="#home"
          className="ml-3"
          style={{ fontSize: "30px" }}
        >
          <span style={{ color: "grey" }}> Sample </span>Stock
        </Navbar.Brand>

        <Nav className="ml-auto mr-5">
          <i className="fas fa-user-alt" style={{ fontSize: "24px" }}></i>
        </Nav>
      </Navbar>
    </div>
  );
}
