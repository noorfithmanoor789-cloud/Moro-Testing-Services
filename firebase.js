// firebase.js — MORO TESTING SERVICES
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// ============================================================
// MORO TESTING SERVICES — Firebase Config
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyCIvS-QVcToF3ZuHMjBlGcBPcMlUQ3zXaU",
  authDomain: "moro-testing-services.firebaseapp.com",
  projectId: "moro-testing-services",
  storageBucket: "moro-testing-services.firebasestorage.app",
  messagingSenderId: "883399069477",
  appId: "1:883399069477:web:32b3922b0b6170bfe214cc",
  measurementId: "G-KL10VF3L87"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
};

export const ACADEMY_NAME = "MORO TESTING SERVICES";
export const ACADEMY_PHONE = "03234296569";
export const WHATSAPP_PHONE = "923234296569";
export const ACADEMY_EMAIL = "morotesting48@gmail.com";
export const ADMIN_PASSWORD = "MTS-ADMIN-2026";

export function formatDate(value) {
  if (!value) return "Not available";
  if (value.toDate) return value.toDate().toLocaleDateString();
  return new Date(value).toLocaleDateString();
}

export function setMessage(target, text, type = "ok") {
  const node = typeof target === "string" ? document.querySelector(target) : target;
  if (!node) return;
  node.textContent = text;
  node.className = `message ${type}`;
}

export function generateSeatNumber() {
  const year = new Date().getFullYear();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `MTS-${year}-${suffix}`;
}
