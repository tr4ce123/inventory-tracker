// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5pjgrEeu7vKgBmB0yjykv3JdE18iDllo",
  authDomain: "inventory-management-75d68.firebaseapp.com",
  projectId: "inventory-management-75d68",
  storageBucket: "inventory-management-75d68.appspot.com",
  messagingSenderId: "854807150532",
  appId: "1:854807150532:web:feb60a46b2489689ca2e91",
  measurementId: "G-KRDZ7NDS01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }