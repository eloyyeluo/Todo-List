
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqtzr7MgyI25tSU1x7H3BkTyFkl8rSt2M",
  authDomain: "todolist-340a6.firebaseapp.com",
  projectId: "todolist-340a6",
  storageBucket: "todolist-340a6.appspot.com",
  messagingSenderId: "129710216021",
  appId: "1:129710216021:web:8d11e75a69fbeaf3fe15dc",
  measurementId: "G-8E7N80B510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export { firestore }