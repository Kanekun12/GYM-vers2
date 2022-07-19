
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBgKd2A4irYrdB5SjqmZIcN_gC3t13Z0-s",
  authDomain: "gym-anytime-d89c4.firebaseapp.com",
  projectId: "gym-anytime-d89c4",
  storageBucket: "gym-anytime-d89c4.appspot.com",
  messagingSenderId: "299659970566",
  appId: "1:299659970566:web:435554a17b0204242edb87"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth= getAuth();