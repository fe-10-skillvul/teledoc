import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import Spesialisasi from "./components/Spesialisasi";
import DokterTersedia from "./components/DokterTersedia";
import Artikel from "./components/Artikel";
import Footer from "./components/Footer";
import SpesialisasiProvider from "./context/SpesialisasiContext";
import { DokterProvider } from "./context/DokterContext";
import ArtikelProvider from "./context/ArticleContext";
import { TopicSelection, PopularArticles, NewArticles } from "./components/DaftarArtikel";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailArtikel from "./components/DetailArtikel";
import DaftarDokter from "./components/DaftarDokter";
import ProfileDokter from './components/Dokter/ProfileDokter';
// import MessageDokter from './components/Dokter/MessageDokter';
// import Invoice from "./components/Dokter/Invoice";
// import PaymentStatus from "./components/Dokter/PaymentStatus";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar-artikel" element={<DaftarArtikelPage />} />
        <Route path="/detail-artikel/:id" element={<DetailArtikelPage />} />
        <Route path="/daftar-dokter" element={<DaftarDokterPage />} />
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
        <ProfileDokter />
      </DokterProvider>
      <Footer />
    </>
  );
}
export default App;
