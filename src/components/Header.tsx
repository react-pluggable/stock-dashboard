import React from "react";
import {
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
// import {} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}

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
