import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Jumbotron from "react-bootstrap/Jumbotron";

const Footer = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Footer</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Footer;
