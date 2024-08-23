// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-k-fdBNs63ftisleVeqiun6WFNf_tCbA",
  authDomain: "chatmingle123.firebaseapp.com",
  projectId: "chatmingle123",
  storageBucket: "chatmingle123.appspot.com",
  messagingSenderId: "865850355699",
  appId: "1:865850355699:web:15a2d981d2ddb9b3f92c86",
  measurementId: "G-STV396CZZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database

