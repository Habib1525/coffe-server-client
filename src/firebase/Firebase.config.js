// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjhqFAwDAxVy_QmvRLrAATSm0FBKAzaAg",
  authDomain: "coffee-store-638df.firebaseapp.com",
  projectId: "coffee-store-638df",
  storageBucket: "coffee-store-638df.appspot.com",
  messagingSenderId: "16357886102",
  appId: "1:16357886102:web:64f66c703c251655ce9ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;