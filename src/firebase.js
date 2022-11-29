import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_SECRET_KEY,
  authDomain: "my-app-89d95.firebaseapp.com",
  projectId: "my-app-89d95",
  storageBucket: "my-app-89d95.appspot.com",
  messagingSenderId: "722893185926",
  appId: "1:722893185926:web:421e2e1dbfad1661570207"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
