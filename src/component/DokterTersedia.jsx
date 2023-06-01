import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DokterContext } from "./DokterContext";
import "./DokterTersedia.css";

function DokterTersedia() {
  const dokterData = useContext(DokterContext);

  // Slice the dokterData array to display only the first 4 items
  const limitedDokterData = dokterData.slice(0, 4);

  return (
    <Container className="dokter-tersedia mb-4">
      <div className="d-flex title justify-content-between align-items-center mb-4">
        <h5>Dokter yang Tersedia</h5>
        <a href="" className="text-decoration-none">
          Lihat Semua
        </a>
      </div>

      <Row className="">
        {limitedDokterData.map((dokter) => (
          <Col md={3} className="col-doctor mt-sm-3" key={dokter.id}>
            <Card className="doctor-card card-sm-1 text-bg-dark">
              <Card.Img src={dokter.gambarDokter} className="card-img-top" alt="" />
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
  );
}

export default DokterTersedia;
