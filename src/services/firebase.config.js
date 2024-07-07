// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmJnJhiKn6xFJgkReUDZeUXv8z_romUoA",
  authDomain: "cst-study-zone.firebaseapp.com",
  projectId: "cst-study-zone",
  storageBucket: "cst-study-zone.appspot.com",
  messagingSenderId: "26860419601",
  appId: "1:26860419601:web:ed26719aeb6698ba884fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;