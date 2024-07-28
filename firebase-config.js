// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB32vGflJ82W2X9w_n9zjOkr1NeZinuER8",
  authDomain: "yones-5c807.firebaseapp.com",
  projectId: "yones-5c807",
  storageBucket: "yones-5c807.appspot.com",
  messagingSenderId: "789685354526",
  appId: "1:789685354526:web:c991dc9606c5fa0073ae0f",
  measurementId: "G-SCXZQJ0CJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);