import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PaymentStatus.css";

const PaymentStatus = () => {
  return (
    <Card className="payment-status">
      <Card.Body>
        <div className="text-center mb-5">
          <img src="/src/assets/img/check/check2.png" alt="Check" className="check-img" />
        </div>
        <Card.Title className="transaction text-center mb-3">Transaksi berhasil!</Card.Title>
        <Card.Text className="success text-center mb-5">
          Selamat, pembayaran anda telah berhasil
        </Card.Text>
        <div className="text-center">
          <Button variant="primary">OK</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PaymentStatus;