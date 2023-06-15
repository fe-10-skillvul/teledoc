import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="ms-3">
          <img src="src\assets\img\logo\logo.png" alt="TeleDoc" height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="#features">Beranda</Nav.Link>
            <Nav.Link href="#pricing">Dokter</Nav.Link>
            <Nav.Link href="#pricing">Notifikasi</Nav.Link>
            <Nav.Link href="#pricing">Artikel</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-success">Masuk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
