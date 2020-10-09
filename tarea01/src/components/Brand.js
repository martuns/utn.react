import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Brand = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img
            src="/images/utn.png"
            width="40"
            className="d-inline-block align-top"
            alt="UTN logo"
          />
        </Col>
        <Col >
          <img
            src="/images/react.png"
            width="90"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Brand;
