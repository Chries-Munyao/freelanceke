// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXWwo1l4geXCDp8DwE6LAOTzsioO-alko",
  authDomain: "freelanceke-ff1e0.firebaseapp.com",
  projectId: "freelanceke-ff1e0",
  storageBucket: "freelanceke-ff1e0.firebasestorage.app",
  messagingSenderId: "349613322636",
  appId: "1:349613322636:web:c6f9a411036a6142a026a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);