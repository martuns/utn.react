import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const socialMediaItems = [
  {
    title:"/User",
    img: "/images/socialMedia_01.png",
    link: "/#",
    alt:"Instagram"
  },
  {
    title:"/User",
    img: "/images/socialMedia-02.png",
    link: "/#",
    alt:"Twitter"
  },
  {
    title:"/User",
    img: "/images/socialMedia-03.png",
    link: "/#",
    alt:"Facebook"
  },
  
];

const SocialMedia = () => {
  return (
    <Container fluid>
      <Row>
      {socialMediaItems.map((icon, index) => (
        <Col key={icon.alt + index}>
          <a href={icon.link}>
          <img
            src={icon.img}
            width="70"
            className="d-inline-block align-top"
            alt={icon.alt}
          />
         
          </a>
         
        </Col>
       ))}
      </Row>
    </Container>
  );
};

export default SocialMedia;
