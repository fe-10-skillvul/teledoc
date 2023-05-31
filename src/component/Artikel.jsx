import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Artikel.css";

function Artikel() {
  return (
    <Container className="container-article">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Artikel</h5>
        <a href="" className="text-decoration-none">
          Lihat Semua
        </a>
      </div>

      <div className="badges">
        <a href="" id="badge-new" className="badge-articles">
          Terbaru
        </a>
        <a href="" id="badge-secondary" className="badge-articles">
          Terpopuler
        </a>
        <a href="" id="badge-secondary" className="badge-articles">
          Kehamilan
        </a>
      </div>

      <Row className="text-start g-0 mt-sm-3">
        <Col md>
          <Card className="card-height">
            <a href="" className="card-article text-decoration-none">
              <Card.Img src="src\assets\img\dokter\doctor1.png" style={{ height: "150px" }} alt="gambar" />
              <Card.Body>
                <div className="badge text-wrap mb-1">Makanan Sehat</div>
                <Card.Title>shortTitle</Card.Title>
                <Card.Text>shortDescription</Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md>
          <Card className="card-height">
            <a href="" className="card-article text-decoration-none">
              <Card.Img src="src\assets\img\dokter\doctor1.png" style={{ height: "150px" }} alt="gambar" />
              <Card.Body>
                <div className="badge text-wrap mb-1">Makanan Sehat</div>
                <Card.Title>shortTitle</Card.Title>
                <Card.Text>shortDescription</Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md>
          <Card className="card-height">
            <a href="" className="card-article text-decoration-none">
              <Card.Img src="src\assets\img\dokter\doctor1.png" style={{ height: "150px" }} alt="gambar" />
              <Card.Body>
                <div className="badge text-wrap mb-1">Makanan Sehat</div>
                <Card.Title>shortTitle</Card.Title>
                <Card.Text>shortDescription</Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md>
          <Card className="card-height">
            <a href="" className="card-article text-decoration-none">
              <Card.Img src="src\assets\img\dokter\doctor1.png" style={{ height: "150px" }} alt="gambar" />
              <Card.Body>
                <div className="badge text-wrap mb-1">Makanan Sehat</div>
                <Card.Title>shortTitle</Card.Title>
                <Card.Text>shortDescription</Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Artikel;
