// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhXHlowZUrAzUYifpvD7c4NcpenjI29tg",
  authDomain: "journal-app-f390e.firebaseapp.com",
  projectId: "journal-app-f390e",
  storageBucket: "journal-app-f390e.firebasestorage.app",
  messagingSenderId: "263480169982",
  appId: "1:263480169982:web:e339818dee23e163d91caf"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );