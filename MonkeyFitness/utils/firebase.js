// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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

let app;
let db;

export function getFirebaseApp() {
  if (typeof window === 'undefined') return null;
  if (!app) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  }
  return app;
}

export function getFirebaseDB() {
  if (typeof window === 'undefined') return null;
  if (!db) {
    const app = getFirebaseApp();
    db = getFirestore(app);
  }
  return db;
}

export function getFirebaseAuth() {
  if (typeof window === 'undefined') return null;
  const app = getFirebaseApp();
  return getAuth(app);
}



// Initialize Firebase
// let app;
// if (typeof window !== 'undefined') {
//   app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// }
// const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app);
// export { db };