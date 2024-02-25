import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDF1HnFW8xXmZ-7X_kDt7pCSEvXRoYMihQ",
  authDomain: "peprr-2e3e0.firebaseapp.com",
  projectId: "peprr-2e3e0",
  storageBucket: "peprr-2e3e0.appspot.com",
  messagingSenderId: "647963474954",
  appId: "1:647963474954:web:0713077fca9f70e93b73f3",
  measurementId: "G-DJ3WSST2M7",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, functions, auth };
