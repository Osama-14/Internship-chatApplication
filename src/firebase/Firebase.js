import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCECVYxTfIj6lpO883lVXhot4iBTm0DlYw",
  authDomain: "internship-chatapplicatoion.firebaseapp.com",
  projectId: "internship-chatapplicatoion",
  storageBucket: "internship-chatapplicatoion.appspot.com",
  messagingSenderId: "596050273241",
  appId: "1:596050273241:web:59beb6c21f171e4b9b6fc8",
  measurementId: "G-F7X173S0J9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => signInWithPopup(provider);

export { app, db, collection, signInWithGoogle, getAuth, getDocs, signOut};
