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

// ============================================================
// ACADEMY CONSTANTS
// ============================================================
export const ACADEMY_NAME = "MORO TESTING SERVICES";
export const ACADEMY_PHONE = "03234296569";
export const WHATSAPP_PHONE = "923234296569";
export const ACADEMY_EMAIL = "morotesting48@gmail.com";
export const ADMIN_PASSWORD = "MTS-ADMIN-2026";
export const USERNAME_DOMAIN = "mts.local";
export const EXAM_PORTAL_URL = "https://morotestingservices.vercel.app/";

// ============================================================
// EMAILJS CONFIG
// ============================================================
// ⚠️ Yahan apni EmailJS keys paste karo (agar email bhejni hai)
export const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
export const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";

// ============================================================
// HELPERS
// ============================================================
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

// Generate random password
export function generatePassword() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$";
  let p = "Mts@";
  for (let i = 0; i < 8; i++) p += chars[Math.floor(Math.random() * chars.length)];
  return p;
}

// Generate username (MTS-2026-XXXX)
export function generateUsername(prefix = "MTS") {
  const year = new Date().getFullYear();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${suffix}`;
}

// Convert username to email format
export function usernameToEmail(username) {
  return `${String(username).trim().toLowerCase()}@${USERNAME_DOMAIN}`;
}

// Send approval email via EmailJS
export async function sendApprovalEmail(toEmail, studentName, username, password) {
  if (typeof emailjs === "undefined") {
    console.warn("EmailJS not loaded - skipping email");
    return { ok: false, error: "EmailJS SDK not loaded" };
  }
  if (EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) {
    console.warn("EmailJS keys not configured - skipping email");
    return { ok: false, error: "EmailJS keys not configured" };
  }

  try {
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: toEmail,
      student_name: studentName || "Student",
      username: username,
      password: password,
      login_url: window.location.origin + "/login.html",
      academy_name: ACADEMY_NAME
    });
    console.log("✅ Email sent:", response);
    return { ok: true, response };
  } catch (err) {
    console.error("❌ EmailJS error:", err);
    const msg = (err && (err.text || err.message)) || JSON.stringify(err) || "Unknown error";
    return { ok: false, error: msg, detail: err };
  }
}
