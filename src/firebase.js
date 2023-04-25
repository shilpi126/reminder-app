
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWKM0iRK9sIbkTGz8OXdxj7ZLPgbfjczc",
  authDomain: "reminder-app-43258.firebaseapp.com",
  projectId: "reminder-app-43258",
  storageBucket: "reminder-app-43258.appspot.com",
  messagingSenderId: "1042324846240",
  appId: "1:1042324846240:web:1c16e22cb4d96975e1bbc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);

export {auth, db}