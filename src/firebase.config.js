// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Q5C-m9TezumiNJ29PdoyZ-1nbuLyV0s",
  authDomain: "login-teledoc.firebaseapp.com",
  projectId: "login-teledoc",
  storageBucket: "login-teledoc.appspot.com",
  messagingSenderId: "561692440701",
  appId: "1:561692440701:web:1774bf4c12d0b7cf139914",
  measurementId: "G-7P1GQ4JC2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
