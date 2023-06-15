import React, { useContext } from "react";
import { DokterContext } from "../context/DokterContext";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DaftarDokter.css";

function DaftarDokter() {
  const dokterData = useContext(DokterContext);

  return (
    <div>
      <Container fluid style={{ marginTop: "80px" }}>
        <h5>Dokter yang Tersedia</h5>
      </Container>
      <Container fluid className="dokter-tersedia mt-2">
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {dokterData.map((dokter) => (
            <Col className="col-doctor mt-sm-3" key={dokter.id}>
              <Card className="doctor-card card-sm-1">
                <Card.Img src={dokter.gambarDokter} className="card-img-top" alt={dokter.namaDokter} />
                <div className="card-img-overlay p-2">
                  <h2 className="card-title doctor-name">{dokter.namaDokter}</h2>
                  <p className="card-text spesialisasi-text m-1">{dokter.kategori}</p>
                  <p className="card-text place-title m-1">
                    <small>Tempat Praktik</small>
                  </p>
                  <h4 className="m-1">{dokter.tempatPraktik}</h4>
                  <p className="card-text m-1">
                    <small>Harga</small>
                  </p>
                  <h4 className="m-1 price">{dokter.harga}</h4>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DaftarDokter;
