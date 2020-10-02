import React from "react";
import Nav from "react-bootstrap/Nav";

function MenuNav() {
  return (
    <React.Fragment>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Clase 01</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Clase 02</Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>
  );
}

export default MenuNav;
