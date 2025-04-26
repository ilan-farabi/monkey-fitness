// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApYUYpKgaqlOXTXp_PBUfc66WCBE4rzVM",
  authDomain: "monkey-fitness-ff98a.firebaseapp.com",
  projectId: "monkey-fitness-ff98a",
  storageBucket: "monkey-fitness-ff98a.firebasestorage.app",
  messagingSenderId: "236585576901",
  appId: "1:236585576901:web:05c020f5c480cb671d03ac",
  measurementId: "G-BYCLYFGD0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);
export { db };