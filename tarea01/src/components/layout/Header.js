import React from "react";
import Navbar from "react-bootstrap/Navbar";



const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
           UTN. REACT 
        </Navbar.Brand>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
