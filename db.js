// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKFtiUr4rAieveusa-1oFZVrrLUA-v_n4",
  authDomain: "todo-mustafa.firebaseapp.com",
  projectId: "todo-mustafa",
  storageBucket: "todo-mustafa.appspot.com",
  messagingSenderId: "91298077954",
  appId: "1:91298077954:web:615526ebeb23fce018b61b",
  measurementId: "G-Z0YSRHSL1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);