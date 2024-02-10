// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO0t4xfbPkJxuHV13-7GhyTg_ywGUhguE",
  authDomain: "netflixgpt-a117c.firebaseapp.com",
  projectId: "netflixgpt-a117c",
  storageBucket: "netflixgpt-a117c.appspot.com",
  messagingSenderId: "534739963666",
  appId: "1:534739963666:web:3f5d7b3c78edbf2ccc6dcb",
  measurementId: "G-H2HT2HH073",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
