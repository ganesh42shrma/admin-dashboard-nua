// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVcaVjXAVCeX6XPDbLj7jGnGfRiKtnZaw",
  authDomain: "admin-dashboard-1f8f7.firebaseapp.com",
  projectId: "admin-dashboard-1f8f7",
  storageBucket: "admin-dashboard-1f8f7.appspot.com",
  messagingSenderId: "544232567555",
  appId: "1:544232567555:web:3252b1b1a6de8cf50aef36",
  measurementId: "G-Z05QWJ6M4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth};