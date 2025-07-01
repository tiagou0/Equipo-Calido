// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJvLRIZ2WEBKwT_CmswnboQqG6Q_b8Nug",
  authDomain: "equipocalido.firebaseapp.com",
  projectId: "equipocalido",
  storageBucket: "equipocalido.firebasestorage.app",
  messagingSenderId: "749118491489",
  appId: "1:749118491489:web:1b12998b8c336dfcd7d320",
  measurementId: "G-3BZ9NEKG3L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
