// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyAkvLlId7X5Sp7nggCdPIifnM6fcIgng2U",
  authDomain: "movie-app-442ee.firebaseapp.com",
  projectId: "movie-app-442ee",
  storageBucket: "movie-app-442ee.firebasestorage.app",
  messagingSenderId: "873212441444",
  appId: "1:873212441444:web:367c48bc7ab995a751c071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ ADD THIS
export const auth = getAuth(app);