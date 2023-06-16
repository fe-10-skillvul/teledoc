import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import { DokterProvider } from "../context/DokterContext";
import ProfileDokter from "../component/ProfilDokter";

function ProfilDokterPage() {
  return (
    <>
      <NavbarComponent />

      <DokterProvider>
        <ProfileDokter />
      </DokterProvider>

      <Footer />
    </>
  );
}

export default ProfilDokterPage;
