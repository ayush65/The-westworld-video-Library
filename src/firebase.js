/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwh-F0anqTPz1Pmlg4BFp4VWBsajwxcSw",
  authDomain: "westside-d06be.firebaseapp.com",
  projectId: "westside-d06be",
  storageBucket: "westside-d06be.appspot.com",
  messagingSenderId: "61693834048",
  appId: "1:61693834048:web:5909bb2514c5c9778680a5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore();
