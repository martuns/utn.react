import React from "react";
import { Row, Col } from "react-bootstrap";

import Image from 'react-bootstrap/Image'

const Aside = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} md={12}>
            <h2>Imagen Random</h2>
          <Image src="./images/descarga.jfif" rounded  fluid />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Aside;
