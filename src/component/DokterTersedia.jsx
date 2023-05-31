import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./DokterTersedia.css";

function DokterTersedia() {
  return (
    <Container className="dokter-tersedia mb-4">
      <div className="d-flex title justify-content-between align-items-center mb-4">
        <h5>Dokter yang Tersedia</h5>
        <a href="" className="text-decoration-none">
          Lihat Semua
        </a>
      </div>

      <Row className="mt-sm-3">
        <Col xs={12} sm={6} md={4} lg={3} className="col-doctor">
          <div className="card doctor-card card-sm-1">
            <img src="src\assets\img\dokter\doctor1.png" className="card-img-top" alt="" />
            <div className="card-img-overlay p-2">
              <h2 className="card-title doctor-name">dr. Serena Gome</h2>
              <p className="card-text spesialisasi-text m-1">Dokter Umum</p>
              <p className="card-text place-title m-1">
                <small>Tempat Praktik</small>
              </p>
              <h4 className="m-1">RSUD dr.Soedono</h4>
              <p className="card-text m-1">
                <small>Harga</small>
              </p>
              <h4 className="m-1 price">Rp. 35.000</h4>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="col-doctor">
          <div className="card doctor-card card-sm-1">
            <img src="src\assets\img\dokter\doctor1.png" className="card-img-top" alt="" />
            <div className="card-img-overlay p-2">
              <h2 className="card-title doctor-name">dr. Serena Gome</h2>
              <p className="card-text spesialisasi-text m-1">Dokter Umum</p>
              <p className="card-text place-title m-1">
                <small>Tempat Praktik</small>
              </p>
              <h4 className="m-1">RSUD dr.Soedono</h4>
              <p className="card-text m-1">
                <small>Harga</small>
              </p>
              <h4 className="m-1 price">Rp. 35.000</h4>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="col-doctor">
          <div className="card doctor-card card-sm-1">
            <img src="src\assets\img\dokter\doctor1.png" className="card-img-top" alt="" />
            <div className="card-img-overlay p-2">
              <h2 className="card-title doctor-name">dr. Serena Gome</h2>
              <p className="card-text spesialisasi-text m-1">Dokter Umum</p>
              <p className="card-text place-title m-1">
                <small>Tempat Praktik</small>
              </p>
              <h4 className="m-1">RSUD dr.Soedono</h4>
              <p className="card-text m-1">
                <small>Harga</small>
              </p>
              <h4 className="m-1 price">Rp. 35.000</h4>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="col-doctor">
          <div className="card doctor-card card-sm-1">
            <img src="src\assets\img\dokter\doctor1.png" className="card-img-top" alt="" />
            <div className="card-img-overlay p-2">
              <h2 className="card-title doctor-name">dr. Serena Gome</h2>
              <p className="card-text spesialisasi-text m-1">Dokter Umum</p>
              <p className="card-text place-title m-1">
                <small>Tempat Praktik</small>
              </p>
              <h4 className="m-1">RSUD dr.Soedono</h4>
              <p className="card-text m-1">
                <small>Harga</small>
              </p>
              <h4 className="m-1 price">Rp. 35.000</h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DokterTersedia;
