import React from "react";
import Button from "react-bootstrap/Button";

const Section = ({ title, content, link }) => {
  return (
    <div>
      <h3>{title} </h3>
      <p>{content}</p>
      <p>
        <Button variant="primary" href={link}>
          Ver Mas
        </Button>
      </p>
    </div>
  );
};

export default Section;
