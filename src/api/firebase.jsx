// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdv26wZAwqnqOU5ubZ4MVUQFdar6cuPfI",
  authDomain: "hoovershop-1ec5d.firebaseapp.com",
  projectId: "hoovershop-1ec5d",
  storageBucket: "hoovershop-1ec5d.firebasestorage.app",
  messagingSenderId: "924643587912",
  appId: "1:924643587912:web:e7659a39cb9ed14ebee57d",
  measurementId: "G-739NBM0472",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
