import React, { useContext } from "react";
import { ArtikelContext } from "../context/ArticleContext";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./DaftarArtikel.css";

function TopicSelection() {
  const { loading, error, articles } = useContext(ArtikelContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container fluid className="topic-selection">
      <h3 className="mb-3">Topik Terkini:</h3>
      <div className="btn-group d-flex flex-wrap" role="group">
        {articles.map((item) => (
          <Button key={item.id} variant="outline-primary" className="topic btn mb-2">
            {item.kategori}
          </Button>
        ))}
      </div>
    </Container>
  );
}

function PopularArticles() {
  const { loading, error, articles } = useContext(ArtikelContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const topArticle = articles[0];
  const otherArticles = articles.slice(0, 4);

  return (
    <Container fluid className="popular mb-4">
      <h3>Artikel Terpopuler</h3>
      <Row>
        <Col lg={8}>
          <div>
            <Card id="topArticle" className="mb-3">
              <Card.Img variant="top" src={topArticle && topArticle.gambar} />
              <Card.Body>
                <Card.Title>
                  <a href={topArticle && topArticle.href}>{topArticle && topArticle.judul}</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={4}>
          <div>
            {otherArticles.map((item) => (
              <div key={item.id} className="otherArticles">
                <Card id="otherArticles" className="mb-3" style={{ height: "150px" }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Card.Img style={{ height: "148px", width: "150px" }} src={item && item.gambar} className="card-image" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title className="card-title">
                          <a href={item && item.href}>{item && item.judul}</a>
                        </Card.Title>
                        <Card.Text className="card-text">{item.deskripsi}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function NewArticles() {
  const { loading, error, articles } = useContext(ArtikelContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container fluid>
      <h4 className="text-center mb-3">Artikel Terbaru</h4>
      <Row className="text-start g-0 mt-sm-3">
        {articles.slice(0, 4).map((article) => (
          <Col xs={12} sm={6} md={6} lg={3} key={article.id}>
            <Card className="card-height m-2">
              <a href="" className="card-article text-decoration-none">
                <Card.Img src={article.gambar} style={{ height: "150px" }} alt="gambar" />
                <Card.Body>
                  <div className="badge text-wrap mb-1">{article.kategori}</div>
                  <Card.Title className="card-title">{article.judul}</Card.Title>
                  <Card.Text className="card-text">{article.deskripsi}</Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { TopicSelection, PopularArticles, NewArticles };
