import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Spesialisasi.css";

const Spesialisasi = () => {
  return (
    <Container className="spesialisasi container-dokter-tersedia mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Spesialisasi Dokter</h3>
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
          <img src="https://i.ibb.co/BLsJ800/Spesialis-kulit.png" alt="spesialisasi-3" />
          <p className="spesialisasi-card-p">Spesialis Kulit</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/BLsJ800/Spesialis-kulit.png" alt="spesialisasi-3" />
          <p className="spesialisasi-card-p">Spesialis Kulit</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src="https://i.ibb.co/BLsJ800/Spesialis-kulit.png" alt="spesialisasi-3" />
          <p className="spesialisasi-card-p">Spesialis Kulit</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Spesialisasi;
