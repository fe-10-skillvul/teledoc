import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="hero-content">
            <div className="hero-greeting ms-md-5">
              <h1>Konsultasi kesehatan dengan Mudah</h1>
              <p>
                Chat dokter, konsultasi online, informasi kesehatan terupdate
                <br />
                semua ada di TeleDoc.
              </p>
              <div className="hero-button">
                <Button>Konsultasi Sekarang</Button>
              </div>
            </div>
          </Col>
          <Col md={6} className="hero-img">
            <img src="https://i.ibb.co/kxxpbNt/hero.png" className="img-fluid mt-md-5" alt="hero" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
