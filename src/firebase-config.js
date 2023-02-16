// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOPtoetFa1Wi8KLZQnjR7ALIJzhh4kW4Y",
  authDomain: "tikangstore-5390d.firebaseapp.com",
  projectId: "tikangstore-5390d",
  storageBucket: "tikangstore-5390d.appspot.com",
  messagingSenderId: "872320249997",
  appId: "1:872320249997:web:8ef631c578fbab3d9ff2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);