import React from "react";
import Nav from "react-bootstrap/Nav";

const navItems = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function MenuNav() {
  return (
    <React.Fragment>
      <Nav defaultActiveKey="/home" as="ul">
      {navItems.map((nav, index) => (
        <Nav.Item as="li" key={nav.title + index}>
          <Nav.Link href={nav.link}>{nav.title}</Nav.Link>
        </Nav.Item>
       ))}
      </Nav>
    </React.Fragment>
  );
}

export default MenuNav;
