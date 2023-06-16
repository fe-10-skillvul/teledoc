// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDroASKXgjmeSisXy1lVD5D4atg9Sj3FKQ",
  authDomain: "teledoc-ed30b.firebaseapp.com",
  projectId: "teledoc-ed30b",
  storageBucket: "teledoc-ed30b.appspot.com",
  messagingSenderId: "1066928502276",
  appId: "1:1066928502276:web:f9085be3acc0cde635e751",
  measurementId: "G-24NX7657ZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
