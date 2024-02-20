import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbHBl5quE5yd1jWZl_m89AzOm8g0hoGvQ",
  authDomain: "mbmcomm-f127b.firebaseapp.com",
  projectId: "mbmcomm-f127b",
  storageBucket: "mbmcomm-f127b.appspot.com",
  messagingSenderId: "145847366438",
  appId: "1:145847366438:web:85164b2ae9900eb48887e7",
  measurementId: "G-V8L738PG7J"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore();



