import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="ms-3">
          <img src="src\assets\img\logo.png" alt="TeleDoc" height={30} />
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

// const NavbarComponent = () => {
//   return (
//     <Navbar expand="lg" bg="light" fixed="top" className="navbar mb-0 pt-3 pb-3">
//       <Container className="mx-auto">
//         <Navbar.Brand href="#">
//           <img src="src\assets\img\logo.png" alt="Logo" height="30" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarNav" />
//         <Navbar.Collapse id="navbarNav">
//           <Nav className="ms-auto mt-2">
//             <Nav.Link href="index.html">Beranda</Nav.Link>
//             <Nav.Link href="#">Dokter</Nav.Link>
//             <Nav.Link href="#">Notifikasi</Nav.Link>
//             <Nav.Link href="artikel.html">Artikel</Nav.Link>
//           </Nav>
//           <Button variant="outline-primary" className="ms-5">
//             Masuk
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;
