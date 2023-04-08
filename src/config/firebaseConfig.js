// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQn0KiPw1hk5QwdVIX6jE9KbjMO3n4754",
  authDomain: "petsfriends-2cc65.firebaseapp.com",
  projectId: "petsfriends-2cc65",
  storageBucket: "petsfriends-2cc65.appspot.com",
  messagingSenderId: "415027090740",
  appId: "1:415027090740:web:6f8d4c9dc0d14f6b8cc161",
  measurementId: "G-TPP67X9EE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);















































// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCJNW40KR9r7PT-KoF14E_t6LFv9O_UxZA",
//   authDomain: "petsfriends-eb96b.firebaseapp.com",
//   projectId: "petsfriends-eb96b",
//   storageBucket: "petsfriends-eb96b.appspot.com",
//   messagingSenderId: "267446771317",
//   appId: "1:267446771317:web:0a4bf8d311543b95b0223c",
//   measurementId: "G-WDVF4MTSQ1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAQn0KiPw1hk5QwdVIX6jE9KbjMO3n4754",
//   authDomain: "petsfriends-2cc65.firebaseapp.com",
//   projectId: "petsfriends-2cc65",
//   storageBucket: "petsfriends-2cc65.appspot.com",
//   messagingSenderId: "415027090740",
//   appId: "1:415027090740:web:6f8d4c9dc0d14f6b8cc161",
//   measurementId: "G-TPP67X9EE9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);