// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-e28ec.firebaseapp.com",
  projectId: "store-tutorial-e28ec",
  storageBucket: "store-tutorial-e28ec.appspot.com",
  messagingSenderId: "9620896571",
  appId: "1:9620896571:web:e723ec643711d43ba2151e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();