// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFt8vxXxuoisMAWx-5uowfmVfwLL6XfE",
  authDomain: "netflix-gpt-aa492.firebaseapp.com",
  projectId: "netflix-gpt-aa492",
  storageBucket: "netflix-gpt-aa492.firebasestorage.app",
  messagingSenderId: "1072540661501",
  appId: "1:1072540661501:web:ad834b3d7cc5851edeb094",
  measurementId: "G-NRY7ZF0RTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();