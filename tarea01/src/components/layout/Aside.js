import React from "react";
import { Row, Col } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Aside = ({ title, image }) => {
  return (
    <Card  className="card-body bg-primary text-white ">
      <div className="card-header">
        {" "}
        <h3>{title}</h3>
      </div>
      <div class="card-body">
        <Image src={image} rounded fluid />
      </div>
    </Card>
  );
};

export default Aside;
