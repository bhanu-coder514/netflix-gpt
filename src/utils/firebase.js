// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCijBgVUH2hxArpZdqvx0EQDMK6qCq60Bc",
  authDomain: "netflixgpt-620f7.firebaseapp.com",
  projectId: "netflixgpt-620f7",
  storageBucket: "netflixgpt-620f7.firebasestorage.app",
  messagingSenderId: "413019236165",
  appId: "1:413019236165:web:107da1a1d2b53e88a7402c",
  measurementId: "G-TTJELHGS1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();