import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState(""); // State untuk melacak link yang aktif

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="ms-3">
          <img src="https://i.ibb.co/WFN1kzQ/logo.png" alt="TeleDoc" height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Link to="/beranda" className={`nav-link ${activeLink === "/beranda" ? "active" : ""}`} onClick={() => handleLinkClick("/beranda")}>
              Beranda
            </Link>
            <Link to="/dokter" className={`nav-link ${activeLink === "/dokter" ? "active" : ""}`} onClick={() => handleLinkClick("/dokter")}>
              Dokter
            </Link>
            <Link to="/notifikasi" className={`nav-link ${activeLink === "/notifikasi" ? "active" : ""}`} onClick={() => handleLinkClick("/notifikasi")}>
              Notifikasi
            </Link>
            <Link to="/artikel" className={`nav-link ${activeLink === "/artikel" ? "active" : ""}`} onClick={() => handleLinkClick("/artikel")}>
              Artikel
            </Link>
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
