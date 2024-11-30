// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS0dsh6STl8OTMKlVHt5gpXn9ve2x8tbk",
  authDomain: "coffee-store-5b845.firebaseapp.com",
  projectId: "coffee-store-5b845",
  storageBucket: "coffee-store-5b845.firebasestorage.app",
  messagingSenderId: "549752073165",
  appId: "1:549752073165:web:dffaabda84c8a3579cf284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
