import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React TypeScript Bootstrap Tutorial</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
