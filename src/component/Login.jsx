import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import OtpInput from "otp-input-react";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        localStorage.setItem("isLoggedIn", "true"); // Set status login sebagai "true" saat berhasil login
        navigate("/beranda"); // Menggunakan 'navigate' untuk navigasi ke halaman LandingPage
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <Container
      fluid
      className="bg-emerald-500 flex items-center justify-center h-screen "
      style={{
        backgroundImage: "url('https://i.ibb.co/SX1bL6f/bg-login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "58px",
      }}
    >
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          history.push("/beranda") //  Navigate ke landing page
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              <img src="https://i.ibb.co/WFN1kzQ/logo.png" alt="Teledoc" />
            </h1>
            {showOTP ? (
              <>
                <label htmlFor="otp" className="font-bold text-xl text-white text-center">
                  Masukkan PIN Anda
                </label>
                <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus className="opt-container "></OtpInput>
                <button onClick={onOTPVerify} className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                  {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <label htmlFor="" className="font-bold text-xl text-white text-center">
                  Masukkan Nomor Ponsel Anda
                </label>
                <PhoneInput country={"id"} value={ph} onChange={setPh} />
                <button onClick={onSignup} className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded " style={{ backgroundColor: "black" }}>
                  {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
                  <span>Lanjut</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
