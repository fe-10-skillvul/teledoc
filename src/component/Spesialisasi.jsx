import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Spesialisasi.css";

const Spesialisasi = () => {
  return (
    <Container className="spesialisasi container-dokter-tersedia mb-4 mt-4">
      <div className="spesialisasi-title d-flex justify-content-between align-items-center">
        <h5>Spesialisasi Dokter</h5>
        <a href="#" className="text-decoration-none">
          Lihat Semua
        </a>
      </div>

      <Row>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/PNh8Y2x/dokter-umum.png" alt="spesialisasi-1" />
          <p className="spesialisasi-card-p">Dokter Umum</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/x1Qv2gz/Spesialis-anak.png" alt="spesialisasi-2" />
          <p className="spesialisasi-card-p">Spesialis Anak</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/BLsJ800/Spesialis-kulit.png" alt="spesialisasi-3" />
          <p className="spesialisasi-card-p">Spesialis Kulit</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/L0GF0WW/Spesialis-tht.png" alt="spesialisasi-4" />
          <p className="spesialisasi-card-p">Spesialis THT</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/KLrYQFT/Spesialis-mata.png" alt="spesialisasi-6" />
          <p className="spesialisasi-card-p">Spesialis Mata</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/J5ZHPTZ/dokter-gigi.png" alt="spesialisasi-5" />
          <p className="spesialisasi-card-p">Dokter Gigi</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Spesialisasi;
