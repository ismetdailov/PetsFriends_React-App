// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQn0KiPw1hk5QwdVIX6jE9KbjMO3n4754",
  authDomain: "petsfriends-2cc65.firebaseapp.app", //.com???????????????
  projectId: "petsfriends-2cc65",
  storageBucket: "petsfriends-2cc65.appspot.app", //.com??????????????
  messagingSenderId: "415027090740",
  appId: "1:415027090740:web:6f8d4c9dc0d14f6b8cc161",
  measurementId: "G-TPP67X9EE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);