import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvAQb7CCp5ZI8mxSP3riMLD0t8RSXyX_o",
  authDomain: "backend-75915-avilesbarber.firebaseapp.com",
  projectId: "backend-75915-avilesbarber",
  storageBucket: "backend-75915-avilesbarber.firebasestorage.app",
  messagingSenderId: "1004541767071",
  appId: "1:1004541767071:web:b4637570ebbe61db6121aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ( app );