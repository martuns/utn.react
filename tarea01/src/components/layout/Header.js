import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Row>
        <Col sm={6} lg={6}>
          {" "}
          <Navbar.Brand href="#home">UTN. REACT</Navbar.Brand>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
