import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./component/Navbar";
import Hero from "./component/Hero";
import Spesialisasi from "./component/Spesialisasi";
import DokterTersedia from "./component/DokterTersedia";
import Artikel from "./component/Artikel";
import Footer from "./component/Footer";
import SpesialisasiProvider from "./context/SpesialisasiContext";
import { DokterProvider } from "./context/DokterContext";
import ArtikelProvider from "./context/ArticleContext";
import { TopicSelection, PopularArticles, NewArticles } from "./component/DaftarArtikel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar-artikel" element={<DaftarArtikelPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <SpesialisasiProvider>
        <Spesialisasi />
      </SpesialisasiProvider>
      <DokterProvider>
        <DokterTersedia />
      </DokterProvider>
      <ArtikelProvider>
        <Artikel />
      </ArtikelProvider>
      <Footer />
    </>
  );
}

function DaftarArtikelPage() {
  return (
    <>
      <NavbarComponent />
      <ArtikelProvider>
        <TopicSelection />
        <PopularArticles />
        <NewArticles />
      </ArtikelProvider>

      <Footer />
    </>
  );
}

export default App;
