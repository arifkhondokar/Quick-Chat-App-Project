import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCt37aIQJ3Q448HltjEHDPIBzrmXIwT5GM",
  authDomain: "quickchat-11414.firebaseapp.com",
  projectId: "quickchat-11414",
  storageBucket: "quickchat-11414.appspot.com",
  messagingSenderId: "561429044573",
  appId: "1:561429044573:web:53be6d5979d676f87ddcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig