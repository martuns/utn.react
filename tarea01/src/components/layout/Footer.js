import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import Brand from "../Brand";

import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className="card bg-dark text-white">
      <Container className="card-body">
       <Row >
              <Col sm={5} lg={5}>
                <SocialMedia />
              </Col>
              <Col sm={3} lg={3}>
               { }
               
              </Col>
              <Col sm={4} lg={4}>
                <Brand />
              </Col>
            </Row>
      </Container>
    </Card>
  );
};

export default Footer;
