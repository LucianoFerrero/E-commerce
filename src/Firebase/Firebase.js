// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2E6d3LkiPXntjw7duB7n6symXsPTiHmg",
  authDomain: "proyecto-d58d9.firebaseapp.com",
  projectId: "proyecto-d58d9",
  storageBucket: "proyecto-d58d9.appspot.com",
  messagingSenderId: "333239645421",
  appId: "1:333239645421:web:cd6626ef0c33ed3f9d48e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app