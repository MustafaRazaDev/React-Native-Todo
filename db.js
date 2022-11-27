// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiFTVg5PxEaLDrrsQlZhEaWCZzpFraV_U",
  authDomain: "faztchat.firebaseapp.com",
  projectId: "faztchat",
  storageBucket: "faztchat.appspot.com",
  messagingSenderId: "630375214172",
  appId: "1:630375214172:web:981ff2614fb6d6823cca99",
  measurementId: "G-PCNDFMG3KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);