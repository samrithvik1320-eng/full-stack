// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRXeY2O4X9SZ7phy6eGbwPlrTrv4sDaI",
  authDomain: "exam-preparation-4ff6a.firebaseapp.com",
  projectId: "exam-preparation-4ff6a",
  storageBucket: "exam-preparation-4ff6a.firebasestorage.app",
  messagingSenderId: "742739043980",
  appId: "1:742739043980:web:daeedc44a83c7803297da9",
  measurementId: "G-VCSE91GPYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);