import { Container, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./MessageDokter.css";

function MessageDokter() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleOrderSubmit = () => {
    if (selectedPayment) {
      console.log("Pesanan dibuat");
      console.log("Metode Pembayaran:", selectedPayment);
    } else {
      alert("Silakan pilih metode pembayaran");
    }
  };

  return (
    <Container className="container-message-dokter">
      <div className="message-dokter">
        <h3>Pesan Dokter</h3>
        <span className="consultation">Konsultasi untuk</span>
        <div className="consultation-name-wrapper">
          <span className="consultation-name">Kairi Kalanda</span>
        </div>
      </div>

      <div className="order-dokter">
        <span>Dokter yang dipesan</span>
      </div>
      <div className="dokter-profile">
        <div className="profile-image">
          <img src="/src/assets/profiledokter.png" alt="Doctor Profile" />
        </div>
        <div className="profile-details">
          <div className="profile-heading">
            <h2 className="profile-name">dr Serena Gome</h2>
            <div className="profile-specialty">
              <span>Dokter Umum</span>
            </div>
            <div className="sesi">
              <div className="sesi-info">
                <p>
                  Biaya Sesi <span>1 Jam</span>
                </p>
              </div>
              <div className="sesi-price">
                <span>Rp 35.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-method">
        <span>Pilih Metode Pembayaran</span>
      </div>
      <div className="payment">
        <div className="payment-details">
          <img src="/src/assets/img/payment/visa.png" alt="visa" />
          <label className="payment-name">Transfer Bank</label>
          <input
            type="radio"
            id="visa"
            name="payment"
            value="visa"
            checked={selectedPayment === "visa"}
            onChange={handlePaymentChange}
          />
        </div>

        <div className="payment-details">
          <img src="/src/assets/img/payment/dana.png" alt="dana" />
          <label className="payment-name">Dana</label>
          <input
            type="radio"
            id="dana"
            name="payment"
            value="dana"
            checked={selectedPayment === "dana"}
            onChange={handlePaymentChange}
          />
        </div>

        <div className="payment-details">
          <img src="/src/assets/img/payment/gopay.png" alt="gopay" />
          <label className="payment-name">Gopay</label>
          <input
            type="radio"
            id="gopay"
            name="payment"
            value="gopay"
            checked={selectedPayment === "gopay"}
            onChange={handlePaymentChange}
          />
        </div>

        <div className="payment-details">
          <img src="/src/assets/img/payment/shopee-pay.png" alt="shopee pay" />
          <label className="payment-name">Shopee Pay</label>
          <input
            type="radio"
            id="shopee-pay"
            name="payment"
            value="shopee-pay"
            checked={selectedPayment === "shopee-pay"}
            onChange={handlePaymentChange}
          />
        </div>
      </div>

      <div className="paid">
        <span>Total yang Dibayar</span>
        <div className="paid-price">
          <span>Rp 35.000</span>
        </div>
      </div>
      <div className="make-an-order">
        <Button onClick={handleOrderSubmit}>Buat Pesanan</Button>
      </div>
    </Container>
  );
}

export default MessageDokter;