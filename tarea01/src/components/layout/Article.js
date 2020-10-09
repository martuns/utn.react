import React from "react";
import Section from "./Section";

import Card from "react-bootstrap/Card";

function Article({ title }) {
  return (
    <Card className="card bg-secondary text-white">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <Section title="Section 01" content="Cotenido 1" link="/#" />
      </div>
    </Card>
  );
}

export default Article;
