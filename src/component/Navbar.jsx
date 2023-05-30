import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="light" fixed="top" className="navbar mb-0 pt-3 pb-3">
      <Container>
        <Navbar.Brand href="#">
          <img src="src\assets\img\logo.png" alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto mt-2">
            <Nav.Link href="index.html">Beranda</Nav.Link>
            <Nav.Link href="#">Dokter</Nav.Link>
            <Nav.Link href="#">Notifikasi</Nav.Link>
            <Nav.Link href="artikel.html">Artikel</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="ms-5">
            Masuk
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
