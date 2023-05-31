import { useState } from "react";
import React from "react";
import NavbarComponent from "./component/Navbar";
import Hero from "./component/Hero";
import Spesialisasi from "./component/Spesialisasi";
import DokterTersedia from "./component/DokterTersedia";
import Artikel from "./component/Artikel";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  React.useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(metaTag);
  }, []);

  return (
    <>
      <NavbarComponent />
      <Hero />
      <Spesialisasi />
      <DokterTersedia />
      <Artikel />
      <Footer />
    </>
  );
}

export default App;
