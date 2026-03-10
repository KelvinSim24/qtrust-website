// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // <-- add this


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN_EvStiKmuh-pnVhcIabNBu7UmGndjew",
  authDomain: "qtrust-87b09.firebaseapp.com",
  databaseURL: "https://qtrust-87b09-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qtrust-87b09",
  storageBucket: "qtrust-87b09.appspot.com",
  messagingSenderId: "442653256365",
  appId: "1:442653256365:web:481896eef390b074483424",
  measurementId: "G-4SRRGJR8RS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth and db so other files can use them
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app); 