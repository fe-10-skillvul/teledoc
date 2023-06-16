import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SpesialisasiDokter.css";
import { SpesialisasiContext } from "../context/SpesialisasiContext";

const SpesialisasiDokter = () => {
  const spesialisasi = useContext(SpesialisasiContext);

  return (
    <Container fluid className="spesialisasi container-dokter-tersedia mb-4 mt-4">
      <div className="spesialisasi-title d-flex justify-content-between align-items-center">
        <h5>Spesialisasi Dokter</h5>
      </div>

      <Row>
        {spesialisasi.map((item, index) => (
          <Col md={2} className="spesialisasi-card" key={index}>
            <Link to="/daftar-dokter" className="text-decoration-none">
              {" "}
              {/*Navigate ke daftar dokter */}
              <a href="https://6459d17795624ceb21f0335f.mockapi.io/dokter">
                <img src={item.gambarKategori} alt={`spesialisasi-${index + 1}`} />
                <p className="spesialisasi-card-p">{item.namaKategori}</p>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpesialisasiDokter;
