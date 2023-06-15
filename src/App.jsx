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
import {
  TopicSelection,
  PopularArticles,
  NewArticles,
} from "./component/DaftarArtikel";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailArtikel from "./component/DetailArtikel";
import "./App.css";
import DaftarDokter from "./component/DaftarDokter";
import SpesialisasiDokter from "./component/SpesialisasiDokter/SpesialisasiDokter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar-artikel" element={<DaftarArtikelPage />} />
        <Route path="/detail-artikel/:id" element={<DetailArtikelPage />} />
        <Route path="/daftar-dokter" element={<DaftarDokterPage />} />
        <Route path="/spesialisasi-dokter" element={<SpesialisasiDokterPage />} />
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

function DetailArtikelPage() {
  return (
    <>
      <NavbarComponent />
      <ArtikelProvider>
        <DetailArtikel />
      </ArtikelProvider>
      <Footer />
    </>
  );
}

function DaftarDokterPage() {
  return (
    <>
      <NavbarComponent />
      <DokterProvider>
        <DaftarDokter />
      </DokterProvider>
      <Footer />
    </>
  );
}

// Page Spesialisasi Dokter
function SpesialisasiDokterPage() {
  return (
    <>
      <NavbarComponent />
      <SpesialisasiProvider>
        <SpesialisasiDokter />
      </SpesialisasiProvider>
      <Footer />
    </>
  );
}

export default App;
