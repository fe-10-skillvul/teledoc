import React from "react";
import { Button, Container } from "react-bootstrap";
import { BiLike } from "react-icons/bi";
import "./ProfileDokter.css";

const ProfileDokter = () => {
  return (
    <Container>
    <div className="dokter-profile">
        <div className="profile-image">
            <img src="/src/assets/img/profiledokter.png" alt="Doctor Profile" />
        </div>
        <div className="profile-details">
            <div className="profile-heading">
            <h2 className="profile-name">dr Serena Gome</h2>
            <div className="profile-specialty">
                <span>Dokter Umum</span>
                <Button className="profile-description">Pesan Dokter</Button>
            </div>
            </div>
            <hr className="profile-line" />
            <div className="profile-progress">
            <BiLike style={{ marginRight: "8px" }} />
            <span>99% dari 135 Pasien</span>
            </div>
        </div>
    </div>

    <div className="profile-dokter">
        <h3>Profile Dokter</h3>
          <p>
            dr. Serena Gome adalah seorang dokter umum yang tergabung dalam <br />
            organisasi Ikatan Dokter Indonesia (IDI). Saat ini, beliau dapat membantu <br /> 
            memberikan pelayanan medis seperti konsultasi kesehatan umum.
          </p>
        </div>

        <div className="profile-section">
          <h3>Pengalaman Dokter</h3>
          <p>Kedokteran Umum - MRCCC Siloam Hospitals Semanggi</p>
        </div>

        <div className="profile-section">
          <h3>Riwayat Pendidikan</h3>
          <p>dr. - Kedokteran Umum - Universitas Trisakti</p>
        </div>
        
        <div className="profile-section">
            <h3>Lokasi & Jadwal Praktik</h3>
            <div className="location-container">
                <div className="hospital-details">
                    <div className="hospital-image">
                    <img src="/src/assets/img/tempat-praktik.png" alt="" className="img-fluid rounded-start"/>
                    </div>
                    <div className="hospital-name">
                    <p>MRCCC Siloam Hospitals Semanggi</p>
                    </div>
                </div>
                <div className="schedule-details">
                    <div className="schedule-item">
                    <span className="schedule-day">Hari : Senin - Sabtu</span>
                    </div>
                </div>
                <div className="schedule-details">
                    <div className="schedule-item">
                        <div className="schedule-time-group">
                            <span className="schedule-time start">Pagi : 08.00 - 10.45</span>
                            <span className="schedule-time end">Siang : 13.00 - 15.45</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default ProfileDokter;