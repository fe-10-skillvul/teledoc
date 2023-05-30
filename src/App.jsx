import { useState } from "react";
import React from "react";
import NavbarComponent from "./component/Navbar";
import HeroComponent from "./component/Hero";
import Spesialisasi from "./component/Spesialisasi";
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
      <HeroComponent />
      <Spesialisasi />
    </>
  );
}

export default App;
