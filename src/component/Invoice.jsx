import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Invoice.css";

const Invoice = () => {
  const location = useLocation();
  const { harga } = location.state; // Mengakses data harga dari state lokasi

  return (
    <>
      <Navbar className="navbar" style={{ background: "#40A9FF" }}>
        <Container>
          <Navbar.Brand href="#" className="ms-3">
            <img src="/src/assets/img/logo/teledoc.png" alt="logo" className="logo" style={{ height: "38px" }} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="phone">TELEDOC ID +62 812****825</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="card">
        <div id="title">
          <h3>Pembayaran sukses!</h3>
          <img src="src\assets\img\check\check1.png" alt="Check" />
        </div>
        <div id="subtitle">
          <p>Konsultasi Dokter</p>
        </div>
        <div id="payment-container">
          <div id="payment-method">
            <p>Metode Pembayaran:</p>
          </div>
          <div id="dana">
            <p>Saldo DANA</p>
          </div>
        </div>
        <div id="transaction-container">
          <div id="transaction-date">
            <p>Tanggal Transaksi</p>
          </div>
          <div id="transaction-time">
            <p>10 Maret 2023, 16:47:20</p>
          </div>
        </div>

        <div id="total-container">
          <div id="total-title">
            <span>Total</span>
          </div>
          <div id="total-amount">
            <span>{harga}</span> {/* Menampilkan data harga */}
          </div>
        </div>

        <div id="continue-text">
          <Button className="w-50" style={{ fontWeight: 700, backgroundColor: "#1890FF", border: "none" }}>
            LANJUTKAN
          </Button>
        </div>
      </div>

      <div className="need-help-container text-center">
        <div className="need-help">
          <p>Butuh Bantuan?</p>
          <p>
            Hubungi kami di <span className="need-help-text">1-500-445</span> atau{" "}
            <a href="#" style={{ textDecoration: "none", listStyle: "none", color: "#40A9FF" }}>
              help@teledoc.id
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Invoice;
