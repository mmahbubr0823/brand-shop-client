// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoUD5rSK1wrbit-gR9Or0NhXH7w_DSBcI",
  authDomain: "brand-shop-1377c.firebaseapp.com",
  projectId: "brand-shop-1377c",
  storageBucket: "brand-shop-1377c.appspot.com",
  messagingSenderId: "156992237646",
  appId: "1:156992237646:web:95f788a2007d5abd87131f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;