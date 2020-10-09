import React from "react";
import { Header, MenuNav, Article, Aside, Footer } from "./layout/";

import { Container, Row, Col } from "react-bootstrap";
//import logo from './logo.svg';

function Layout() {
  return (
    <Container  d-flex >
      <Row sm={12} lg={12}>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <MenuNav />
        </Col>
      </Row>
      <Row sm={12}  >
        <Col sm={12} lg={8}>
          <Article title="Welcome!" />
        </Col>
        <Col sm={12} lg={4} >
          <Aside title="Aside Title" image="./images/descarga.jfif" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
