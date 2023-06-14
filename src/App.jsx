import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DaftarArtikelPage from "./pages/DaftarArtikelPage";
import DetailArtikelPage from "./pages/DetailArtikelPage";
import DaftarDokterPage from "./pages/DaftarDokterPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beranda" element={<LandingPage />} />
        <Route path="/dokter" element={<DaftarDokterPage />} />
        <Route path="/notifikasi" element={<LandingPage />} />
        <Route path="/artikel" element={<DaftarArtikelPage />} />
        <Route path="/daftar-artikel" element={<DaftarArtikelPage />} />
        <Route path="/detail-artikel/:id" element={<DetailArtikelPage />} />
        <Route path="/daftar-dokter" element={<DaftarDokterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
