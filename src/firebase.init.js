// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPGVk97q6FJWCeSkoUkxk8hMXID7jHYbc",
  authDomain: "jack-stick.firebaseapp.com",
  projectId: "jack-stick",
  storageBucket: "jack-stick.appspot.com",
  messagingSenderId: "1084548210697",
  appId: "1:1084548210697:web:8723fb437e2f41818358d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;