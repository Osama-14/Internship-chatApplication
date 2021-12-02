
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCECVYxTfIj6lpO883lVXhot4iBTm0DlYw",
    authDomain: "internship-chatapplicatoion.firebaseapp.com",
    projectId: "internship-chatapplicatoion",
    storageBucket: "internship-chatapplicatoion.appspot.com",
    messagingSenderId: "596050273241",
    appId: "1:596050273241:web:59beb6c21f171e4b9b6fc8",
    measurementId: "G-F7X173S0J9"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export default app;